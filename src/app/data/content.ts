// Barrel file - re-exports all portfolio content from the per-section data modules.
// Add or edit your work in the section file, not here:
//   • data/core.ts        - Core landing (profile, journey, featured work)
//   • data/design.ts      - Design / YuuKayCee (projects, NYX Bureau)
//   • data/development.ts - Development / Spy (projects, systems, open source)
//   • data/security.ts    - Security / CYB3R (research, projects, CTF, blog)
//   • data/types.ts       - shared types (Project)
// See docs/AUTHORING.md for copy-paste recipes.

export * from "./types";
export * from "./core";
export * from "./design";
export * from "./development";
export * from "./security";
