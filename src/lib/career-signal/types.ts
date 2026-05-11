import { z } from "zod";

const boundedString = z.string().trim().max(280).optional().default("");
const stringArray = z.array(z.string().trim().min(1)).default([]);

export const scanAnswersSchema = z.object({
  currentSituation: z.string().trim().min(1),
  currentSituationNotes: boundedString,
  careerLevel: z.string().trim().min(1),
  functions: stringArray,
  trustedFor: stringArray,
  urgentPressures: stringArray,
  aiComfort: z.number().int().min(1).max(5),
  aiUseCases: stringArray,
  workMoreOf: stringArray,
  workLessOf: stringArray,
  incomeDirections: stringArray,
  constraints: stringArray,
  usefulContext: boundedString,
});

export type ScanAnswers = z.infer<typeof scanAnswersSchema>;

export const pathwaySchema = z.object({
  title: z.string(),
  whyItFits: z.string(),
  whatToTestFirst: z.string(),
  whatToAvoid: z.string(),
});

export const metricSchema = z.object({
  score: z.number().int().min(0).max(100),
  explanation: z.string(),
  nextAction: z.string(),
});

export const signalResponseSchema = z.object({
  signalMarkdown: z.string(),
  signalJson: z.object({
    currentSignal: z.string(),
    strongestCareerAssets: z.array(z.string()),
    careerRiskSignals: z.array(z.string()),
    aiLeverageOpportunities: z.array(z.string()),
    bestFitPathways: z.array(pathwaySchema),
    positioningStatement: z.object({
      oneLinePositioning: z.string(),
      linkedInHeadline: z.string(),
      iHelpStatement: z.string(),
    }),
    skillGaps: z.array(z.string()),
    sevenDayActionPlan: z.array(z.string()),
    recommendedNextExperiment: z.string(),
    assistantInstructions: z.string(),
  }),
  dashboardJson: z.object({
    careerClarity: metricSchema,
    aiLeverage: metricSchema,
    marketRelevance: metricSchema,
    executionUrgency: metricSchema,
    confidenceRisk: metricSchema,
  }),
});

export type SignalResponse = z.infer<typeof signalResponseSchema>;

export const waitlistSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(180),
  role: z.string().trim().max(120).optional().default(""),
  careerStatus: z.string().trim().max(160).optional().default(""),
  biggestChallenge: z.string().trim().max(280).optional().default(""),
});

export const sessionPayloadSchema = z.object({
  sessionId: z.string().optional(),
  email: z.string().email().optional(),
  name: z.string().max(120).optional(),
  status: z.string().optional().default("draft"),
  currentStep: z.number().int().min(0).max(12).optional().default(0),
  scanAnswers: scanAnswersSchema.partial().optional().default({}),
  signalMarkdown: z.string().optional(),
  signalJson: z.unknown().optional(),
  dashboardJson: z.unknown().optional(),
});
