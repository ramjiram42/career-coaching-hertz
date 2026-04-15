import { z } from 'zod';
import { prisma } from './prisma';

// 1. Zod Structs for Typed Execution
export const RoleRecommendationSchema = z.object({
  role: z.string(),
  fitScore: z.number().min(0).max(100),
  matchNarrative: z.string(),
  weeklySteps: z.array(z.string()),
});

export type RoleRecommendation = z.infer<typeof RoleRecommendationSchema>;

export async function computeAIRecommendation(userId: string): Promise<RoleRecommendation | null> {
  // 1. Lookup User and Target roles
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { skills: { include: { skill: true } } }
  });

  if (!user) return null;

  // 2. Fetch the dynamic Prompt Template from Prisma Database
  const template = await prisma.aiPromptTemplate.findUnique({
    where: { taskType: 'role_recommendation' }
  });

  const sysPrompt = template?.systemPrompt || `Analyze user skills against typical enterprise paths. Return strict JSON.`;

  // 3. Log usage for Tenant Billing
  await prisma.aiUsageLog.create({
    data: {
      userId,
      task: 'role_recommendation',
      promptTokens: sysPrompt.length,
      completionTokens: 150
    }
  });

  // 4. MOCK LLM Execution (Since no OpenAI key present)
  // Re-creates strict JSON complying with the Zod schema
  const simulatedLlmPayload = {
    role: "SAP Project Manager",
    fitScore: 84,
    matchNarrative: `Using AI analysis via ${sysPrompt.substring(0, 20)}... Your profile strongly maps to SAP Project manager due to your deep logic automation roots.`,
    weeklySteps: ["Learn SAP Data Configs", "Complete Budget Module"]
  };

  // 5. Strict Zod Parse
  return RoleRecommendationSchema.parse(simulatedLlmPayload);
}
