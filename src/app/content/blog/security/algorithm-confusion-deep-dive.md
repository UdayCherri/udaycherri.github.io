JWT **algorithm confusion** is one of those bugs that looks impossible until you
see it, and obvious forever after. This post walks through how a verifier that
trusts the token's own `alg` header can be tricked into validating a forged
signature.

## The setup

A server issues tokens signed with **RS256** (asymmetric). It holds a private
key; clients only ever see the public key. Verification *should* be:

> "Verify this RS256 signature against my public key."

But many libraries implement something closer to:

> "Read `alg` from the header, then verify however that says to."

That indirection is the whole vulnerability.

## The attack

An attacker flips the header from `RS256` to `HS256` (symmetric) and signs the
token with **the public key as the HMAC secret**:

```python
import jwt  # PyJWT, vulnerable versions

public_key = open("public.pem").read()
forged = jwt.encode(
    {"sub": "admin", "role": "admin"},
    key=public_key,        # the *public* key, used as an HMAC secret
    algorithm="HS256",
)
print(forged)
```

Because the public key is, by definition, public, the attacker can compute a
valid HMAC. A naive verifier that honours the header will run
`HMAC-SHA256(public_key, ...)` and — surprise — it matches.

## Findings

Across eight libraries I looked at:

- **2 CVEs** assigned across two libraries.
- All eight patched within **60 days** of disclosure.
- The fix in every case: *pin the expected algorithm at the call site*, never
  read it from the token.

## The lesson

Never let attacker-controlled data choose your verification algorithm. Pass an
explicit allow-list:

```python
jwt.decode(token, public_key, algorithms=["RS256"])  # not just "verify()"
```

Trust boundaries live in the smallest details.
