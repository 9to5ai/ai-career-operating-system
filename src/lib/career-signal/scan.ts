import type { ScanAnswers, SignalResponse } from "./types";

export type ScanStep =
  | {
      id: keyof ScanAnswers;
      type: "single";
      question: string;
      helper?: string;
      options: string[];
      optionalText?: {
        id: keyof ScanAnswers;
        label: string;
        placeholder: string;
      };
    }
  | {
      id: keyof ScanAnswers;
      type: "multi";
      question: string;
      helper?: string;
      options: string[];
      max?: number;
    }
  | {
      id: keyof ScanAnswers;
      type: "slider";
      question: string;
      helper?: string;
      minLabel: string;
      maxLabel: string;
    }
  | {
      id: keyof ScanAnswers;
      type: "text";
      question: string;
      helper?: string;
      placeholder: string;
      maxLength: number;
    };

export const scanSteps: ScanStep[] = [
  {
    id: "currentSituation",
    type: "single",
    question: "What best describes your current career situation?",
    helper: "Choose the closest fit. You can add a short note if it matters.",
    options: [
      "Recently made redundant / retrenched",
      "Worried redundancy may be coming",
      "Still employed but feeling stuck",
      "Exploring a career pivot",
      "Considering consulting or fractional work",
      "Already independent / consulting",
      "Other",
    ],
    optionalText: {
      id: "currentSituationNotes",
      label: "Anything specific we should know?",
      placeholder: "Optional: team restructured, sector changed, role ending soon...",
    },
  },
  {
    id: "careerLevel",
    type: "single",
    question: "What level best describes your recent work?",
    options: [
      "Individual contributor / specialist",
      "Manager",
      "Senior manager",
      "Director / Head of",
      "Executive",
      "Founder / operator",
      "Consultant / advisor",
    ],
  },
  {
    id: "functions",
    type: "multi",
    question: "What type of work are you most experienced in?",
    helper: "Select every domain that has meaningful signal.",
    options: [
      "Strategy",
      "Operations",
      "Finance",
      "Sales",
      "Marketing",
      "Product",
      "Technology",
      "HR / People",
      "Risk / Compliance",
      "Customer / Service",
      "Project / Program Management",
      "Analytics / Insights",
      "Administration / Coordination",
      "Other",
    ],
  },
  {
    id: "trustedFor",
    type: "multi",
    question: "What do people usually rely on you for?",
    helper: "Choose up to 5. This is often where transferable leverage appears.",
    max: 5,
    options: [
      "Making sense of messy problems",
      "Managing stakeholders",
      "Driving projects forward",
      "Improving processes",
      "Communicating clearly",
      "Leading teams",
      "Analysing information",
      "Making commercial decisions",
      "Building relationships",
      "Handling risk",
      "Creating structure",
      "Getting things done under pressure",
    ],
  },
  {
    id: "urgentPressures",
    type: "multi",
    question: "What feels most urgent right now?",
    helper: "Choose up to 3 so the output can prioritise.",
    max: 3,
    options: [
      "Replacing income",
      "Finding a new role",
      "Rebuilding confidence",
      "Understanding AI",
      "Updating my positioning",
      "Starting consulting",
      "Finding direction",
      "Becoming more productive",
      "Avoiding becoming obsolete",
      "Building a portfolio career",
    ],
  },
  {
    id: "aiComfort",
    type: "slider",
    question: "How comfortable are you using AI tools today?",
    minLabel: "I barely use them",
    maxLabel: "I use them daily and understand their value",
  },
  {
    id: "aiUseCases",
    type: "multi",
    question: "Where could AI most help you?",
    options: [
      "Resume and job search",
      "LinkedIn and personal brand",
      "Research",
      "Writing",
      "Presentations",
      "Data analysis",
      "Client proposals",
      "Admin and operations",
      "Meeting notes",
      "Business ideas",
      "Workflow automation",
      "Learning new skills",
      "Consulting delivery",
    ],
  },
  {
    id: "workMoreOf",
    type: "multi",
    question: "What kind of work do you want more of?",
    helper: "Choose up to 5.",
    max: 5,
    options: [
      "Strategic thinking",
      "Advisory work",
      "Analysis",
      "Creative work",
      "Client-facing work",
      "Building systems",
      "Leading people",
      "Teaching or coaching",
      "Problem solving",
      "Independent work",
      "Commercial growth",
      "Operational execution",
    ],
  },
  {
    id: "workLessOf",
    type: "multi",
    question: "What kind of work do you want less of?",
    helper: "Choose up to 5.",
    max: 5,
    options: [
      "Corporate politics",
      "Repetitive admin",
      "Low-value meetings",
      "Managing people",
      "Ambiguous accountability",
      "Constant firefighting",
      "Pure execution",
      "Sales pressure",
      "Technical complexity",
      "Compliance-heavy work",
      "Being invisible",
      "Starting from scratch",
    ],
  },
  {
    id: "incomeDirections",
    type: "multi",
    question: "What income path are you most open to exploring?",
    helper: "Choose up to 3.",
    max: 3,
    options: [
      "Another corporate role",
      "Higher-value corporate role",
      "Contracting",
      "Consulting",
      "Fractional leadership",
      "Advisory work",
      "Small business / service business",
      "Creator-led business",
      "Portfolio career",
      "Not sure yet",
    ],
  },
  {
    id: "constraints",
    type: "multi",
    question: "What constraints matter most?",
    options: [
      "Need income quickly",
      "Limited time",
      "Low confidence",
      "Family responsibilities",
      "Need flexibility",
      "Not technical",
      "Don't know what to sell",
      "Weak network",
      "Burnt out",
      "Visa / location constraints",
      "Prefer stability",
      "Prefer independence",
    ],
  },
  {
    id: "usefulContext",
    type: "text",
    question: "In one sentence, what would make this genuinely useful for you?",
    helper: "Optional. Keep it short.",
    maxLength: 280,
    placeholder:
      "Example: I need to know whether I should look for another corporate role or start testing consulting.",
  },
];

export const initialScanAnswers: Partial<ScanAnswers> = {
  currentSituationNotes: "",
  functions: [],
  trustedFor: [],
  urgentPressures: [],
  aiComfort: 3,
  aiUseCases: [],
  workMoreOf: [],
  workLessOf: [],
  incomeDirections: [],
  constraints: [],
  usefulContext: "",
};

function join(values?: string[]) {
  return values && values.length > 0 ? values.join(", ") : "not yet clear";
}

export function createFallbackSignal(answers: ScanAnswers): SignalResponse {
  const strongestDomain = answers.functions[0] ?? "commercial leadership";
  const pathway =
    answers.incomeDirections[0] ?? "Return to corporate with stronger AI positioning";
  const aiUseCase = answers.aiUseCases[0] ?? "research and communication";
  const pressure = answers.urgentPressures[0] ?? "finding direction";

  const signalJson: SignalResponse["signalJson"] = {
    currentSignal: `Your responses suggest a professional with leverage in ${join(
      answers.functions
    )}, currently focused on ${join(answers.urgentPressures)}. This is directional, not definitive: the useful signal is that your experience should be repositioned around outcomes, judgment, and AI-enabled execution rather than around a narrow job title.`,
    strongestCareerAssets: [
      `Credibility in ${strongestDomain}`,
      `Trusted for ${join(answers.trustedFor.slice(0, 3))}`,
      `Clear preference for ${join(answers.workMoreOf.slice(0, 3))}`,
      "Enough commercial context to turn AI into practical workflow leverage",
    ],
    careerRiskSignals: [
      `Current pressure around ${pressure} may push rushed decisions`,
      answers.aiComfort <= 2
        ? "AI confidence is still low, so positioning may lag behind market expectations"
        : "AI usage needs to be connected to visible business outcomes",
      `Constraints to account for: ${join(answers.constraints.slice(0, 3))}`,
    ],
    aiLeverageOpportunities: [
      `Use AI to sharpen positioning for ${pathway}`,
      `Build repeatable workflows for ${aiUseCase}`,
      "Create a 1-page offer, role thesis, or transition narrative using your strongest proof points",
      "Use AI as a research partner to map adjacent roles, client problems, and decision makers",
    ],
    bestFitPathways: [
      {
        title: pathway,
        whyItFits: `It matches your stated income direction and gives you a practical near-term test without starting from scratch.`,
        whatToTestFirst:
          "Write a one-page positioning brief and test it with 3 trusted people or market contacts this week.",
        whatToAvoid:
          "Avoid committing to a large reinvention plan before testing whether the market responds to the positioning.",
      },
      {
        title: "AI-enabled specialist",
        whyItFits:
          "Your existing expertise can become more relevant if paired with AI-supported analysis, communication, and delivery.",
        whatToTestFirst:
          "Pick one workflow you already know well and redesign it with AI support from input to final deliverable.",
        whatToAvoid:
          "Avoid learning tools randomly without tying them to a visible business outcome.",
      },
      {
        title: "Advisor",
        whyItFits:
          "Your trusted strengths point to pattern recognition, judgment, and helping others navigate ambiguity.",
        whatToTestFirst:
          "Offer a short advisory conversation around one problem you can help senior people clarify.",
        whatToAvoid:
          "Avoid vague advisory language. Name the problem, buyer, and outcome.",
      },
    ],
    positioningStatement: {
      oneLinePositioning: `Experienced ${strongestDomain} professional helping organisations turn uncertainty into practical operating decisions in the AI era.`,
      linkedInHeadline: `${strongestDomain} leader | AI-enabled strategy and execution | Career and operating leverage`,
      iHelpStatement: `I help teams facing uncertainty make clearer decisions by combining ${strongestDomain} experience with practical AI-enabled workflows.`,
    },
    skillGaps: [
      "AI-assisted research and synthesis",
      "Outcome-led positioning",
      "Commercial offer design",
      "Workflow documentation",
      "Market testing through small experiments",
    ],
    sevenDayActionPlan: [
      "Pick the single pathway you most want to test first.",
      "Create a 10-bullet evidence bank of outcomes you have delivered.",
      "Use AI to turn that evidence into 3 positioning options.",
      "Map 10 people who could sanity-check the direction.",
      "Book 3 short conversations and ask what problem they would trust you to solve.",
    ],
    recommendedNextExperiment:
      "Run a 14-day positioning test: publish or send one clear statement of the problem you solve, then ask 5 relevant people whether it feels specific, credible, and commercially useful.",
    assistantInstructions: `When helping me with my career, remember that I am currently ${answers.currentSituation}. My strongest signals are ${join(
      answers.trustedFor
    )} across ${join(answers.functions)}. My constraints include ${join(
      answers.constraints
    )}. I am most open to ${join(
      answers.incomeDirections
    )}. Useful AI leverage areas include ${join(
      answers.aiUseCases
    )}. Use a calm, practical, commercially grounded tone. Do not overpromise; help me choose the next useful test.`,
  };

  const dashboardJson: SignalResponse["dashboardJson"] = {
    careerClarity: {
      score: answers.incomeDirections.includes("Not sure yet") ? 52 : 68,
      explanation:
        "Directional signal only. You have enough preference data to choose an initial test, but the market response still needs evidence.",
      nextAction: "Choose one primary pathway to test for the next 14 days.",
    },
    aiLeverage: {
      score: Math.min(90, 35 + answers.aiComfort * 10 + answers.aiUseCases.length * 3),
      explanation:
        "Your AI leverage depends less on tool volume and more on attaching AI to high-value workflows.",
      nextAction: "Redesign one existing workflow with AI support and document the before/after.",
    },
    marketRelevance: {
      score: 72,
      explanation:
        "Your market relevance appears strongest where experience, judgment, and AI-enabled delivery meet a business problem.",
      nextAction: "Translate your strongest asset into a buyer-facing problem statement.",
    },
    executionUrgency: {
      score: answers.constraints.includes("Need income quickly") ? 86 : 63,
      explanation:
        "Urgency is a planning input, not a panic signal. It should narrow the first test.",
      nextAction: "Prioritise moves that create conversations within 7 days.",
    },
    confidenceRisk: {
      score: answers.constraints.includes("Low confidence") ? 78 : 48,
      explanation:
        "This score flags whether confidence may slow action. It is not a psychological assessment.",
      nextAction: "Use small external feedback loops instead of trying to think your way to certainty.",
    },
  };

  const signalMarkdown = `# Career Signal Map

## 1. Your Current Signal
${signalJson.currentSignal}

## 2. Strongest Career Assets
${signalJson.strongestCareerAssets.map((item) => `- ${item}`).join("\n")}

## 3. Career Risk Signals
${signalJson.careerRiskSignals.map((item) => `- ${item}`).join("\n")}

## 4. AI Leverage Opportunities
${signalJson.aiLeverageOpportunities.map((item) => `- ${item}`).join("\n")}

## 5. Best-Fit Pathways
${signalJson.bestFitPathways
  .map(
    (item, index) => `### ${index + 1}. ${item.title}
- Why it fits: ${item.whyItFits}
- What to test first: ${item.whatToTestFirst}
- What to avoid: ${item.whatToAvoid}`
  )
  .join("\n\n")}

## 6. Positioning Statement
- One-line professional positioning: ${signalJson.positioningStatement.oneLinePositioning}
- LinkedIn headline option: ${signalJson.positioningStatement.linkedInHeadline}
- I help X do Y by using Z: ${signalJson.positioningStatement.iHelpStatement}

## 7. Skill Gaps
${signalJson.skillGaps.map((item) => `- ${item}`).join("\n")}

## 8. 7-Day Action Plan
${signalJson.sevenDayActionPlan
  .map((item, index) => `${index + 1}. ${item}`)
  .join("\n")}

## 9. Recommended Next Experiment
${signalJson.recommendedNextExperiment}

## 10. Assistant Instructions
${signalJson.assistantInstructions}`;

  return { signalMarkdown, signalJson, dashboardJson };
}
