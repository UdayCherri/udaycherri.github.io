// Central availability flags: a section is listed in public navigation only
// when it has at least one published entry. Routes remain directly reachable
// (deep links don't break) but hidden sections don't invite clicks to empty pages.
import {
  yuukayceeProjects,
  spyProjects,
  spySystems,
  openSourceRepos,
  devBlogPosts,
  cyberResearch,
  securityProjects,
  ctfArchive,
  cyberBlogPosts,
  featuredWork,
  journeyMilestones,
  currentFocus,
} from "../data/content";

export const availability = {
  designWork: yuukayceeProjects.length > 0,
  designFeatured: yuukayceeProjects.some((p) => p.featured),
  designCaseStudies: yuukayceeProjects.length > 0,
  // Archive/NYX are concept pages; keep them visible as they carry real copy.
  spyFeatured: spyProjects.some((p) => p.featured),
  spyProjects: spyProjects.length > 0,
  spySystems: spySystems.length > 0,
  spyExperiments: false, // no experiments model yet; hidden until defined
  spyOpenSource: openSourceRepos.length > 0,
  spyBlog: devBlogPosts.length > 0,
  cyberResearch: cyberResearch.length > 0,
  securityProjects: securityProjects.length > 0,
  ctfArchive: ctfArchive.length > 0,
  cyberBlogList: cyberBlogPosts.length > 0,
  // Cyber blog is an off-site gateway with real copy; always navigable.
  coreFeatured: featuredWork.length > 0,
  coreJourney: journeyMilestones.length > 0,
  coreFocus: currentFocus.length > 0,
} as const;

export type AvailabilityKey = keyof typeof availability;
