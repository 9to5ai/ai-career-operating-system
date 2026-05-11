// Future roadmap hooks:
// - Weekly personalised Career Signal Briefing
// - Opportunity Radar
// - LinkedIn Positioning Agent
// - Resume Repositioning Agent
// - AI Workflow Designer
// - Consulting Pathway Builder
// - Skill Gap Tracker
// - Human advisor review layer
// - Community cohort layer
//
// The MVP stores scan answers, generated markdown, structured JSON, and
// dashboard metrics so future agents can consume the Career Signal Map as
// durable user context instead of re-running a long intake flow.
export const careerSignalRoadmap = [
  "weekly-briefing",
  "opportunity-radar",
  "linkedin-positioning-agent",
  "resume-repositioning-agent",
  "ai-workflow-designer",
  "consulting-pathway-builder",
  "skill-gap-tracker",
  "human-advisor-review",
  "community-cohort",
] as const;
