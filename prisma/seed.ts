import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Hertz Careers...");

  // Tenants (B2B Multi-tenant seed)
  const tenant1 = await prisma.tenant.create({
    data: { name: 'Hertz Corporation', domain: 'hertz.com' }
  });

  // AI Prompt Templates
  await prisma.aiPromptTemplate.create({
    data: {
      taskType: 'role_recommendation',
      systemPrompt: 'You are a career transition intelligence engine. Based on the user\'s current role, years of experience, skills, certifications, and interests, recommend top targets within Hertz mobility tracks.'
    }
  });

  // Skills
  const skillsData = [
    { name: "Customer Loyalty", category: "Customer Service" },
    { name: "Fleet Management", category: "Operations" },
    { name: "Inventory Auditing", category: "Operations" },
    { name: "P&L Management", category: "Finance" },
    { name: "Conflict Resolution", category: "Soft Skills" },
    { name: "Logistics Coordination", category: "Logistics" },
    { name: "Sales Strategy", category: "Sales" },
    { name: "Regional Strategy", category: "Management" }
  ];

  const dbSkills = await Promise.all(
    skillsData.map((s) => prisma.skill.create({ data: s }))
  );

  function getSkillId(name: string) {
    return dbSkills.find((s) => s.name === name)!.id;
  }

  // Roles
  const roleCsr = await prisma.role.create({
    data: {
      title: "Customer Service Representative",
      description: "Frontline assistance managing vehicle reservations and client loyalty.",
      difficultyLevel: "Entry",
      salaryGrowth: "Moderate",
      estimatedMonths: 0,
    },
  });

  const roleBranchMgr = await prisma.role.create({
    data: {
      title: "Branch Manager",
      description: "Oversees local rental operations, fleet utilization, and P&L.",
      difficultyLevel: "Advanced",
      salaryGrowth: "High",
      estimatedMonths: 6,
      parentRoleId: roleCsr.id,
      requiredSkills: {
        create: [
          { skillId: getSkillId("Fleet Management") },
          { skillId: getSkillId("P&L Management") },
          { skillId: getSkillId("Conflict Resolution") },
        ],
      },
    },
  });

  const roleFleetSup = await prisma.role.create({
    data: {
      title: "Fleet Supervisor",
      description: "Coordinate vehicle maintenance, cleaning, and rapid turnarounds.",
      difficultyLevel: "Intermediate",
      salaryGrowth: "Moderate",
      estimatedMonths: 3,
      parentRoleId: roleCsr.id,
    },
  });

  const roleRegDir = await prisma.role.create({
    data: {
      title: "Regional Director",
      description: "Commands multiple branches, optimizing revenue and strategic scaling.",
      difficultyLevel: "Expert",
      salaryGrowth: "Very High",
      estimatedMonths: 18,
      parentRoleId: roleBranchMgr.id,
    },
  });

  // Learning Paths
  const managerPath = await prisma.learningPath.create({
    data: {
      roleId: roleBranchMgr.id,
      modules: {
        create: [
          { title: "Hertz Fleet Standards", description: "Intro to fleet efficiency.", estimatedHours: 8, orderIndex: 1 },
          { title: "Branch P&L Finance", description: "Financial metrics and cost control.", estimatedHours: 15, orderIndex: 2 },
          { title: "Leadership & Conflict", description: "Team oversight.", estimatedHours: 12, orderIndex: 3, canBeParallel: true },
        ]
      }
    }
  });

  // Mentors
  await prisma.mentor.createMany({
    data: [
      { name: "John Smith", expertiseArea: "Branch Expansion", yearsExperience: 12, language: "English", rating: 4.8, sessionsDone: 45, roleId: roleBranchMgr.id },
      { name: "Maria Garcia", expertiseArea: "Fleet Optimizations", yearsExperience: 10, language: "English", rating: 4.9, sessionsDone: 60, roleId: roleFleetSup.id },
      { name: "Robert Chase", expertiseArea: "Executive Strategy", yearsExperience: 20, language: "English", rating: 5.0, sessionsDone: 100, roleId: roleRegDir.id },
    ]
  });

  // Create a default User for demo purposes
  const demoUser = await prisma.user.upsert({
    where: { email: "demo@hertz.com" },
    update: {},
    create: {
      email: "demo@hertz.com",
      name: "Demo Representative",
      currentRole: "Customer Service Rep",
      yearsExperience: 2,
      targetRoleId: roleBranchMgr.id,
      tenantId: tenant1.id,
      tenantRole: "employee",
      skills: {
        create: [
          { skillId: getSkillId("Customer Loyalty"), level: 5 },
          { skillId: getSkillId("Conflict Resolution"), level: 3 },
          { skillId: getSkillId("Sales Strategy"), level: 2 },
        ]
      }
    }
  });

  // Subscriptions Seed
  await prisma.subscription.create({
    data: {
      tenantId: tenant1.id,
      planTier: 'Enterprise',
      status: 'active',
      seats: 5000,
      stripeCustomerId: 'cus_hertz123',
      stripeSubscriptionId: 'sub_hertz123'
    }
  });

  const mgrModules = await prisma.module.findMany({ where: { pathId: managerPath.id }, orderBy: { orderIndex: 'asc' } });
  
  // Create user progress
  await prisma.userProgress.createMany({
    data: [
      { userId: demoUser.id, moduleId: mgrModules[0].id, status: "COMPLETED", completionPct: 100 },
      { userId: demoUser.id, moduleId: mgrModules[1].id, status: "IN_PROGRESS", completionPct: 45 },
      { userId: demoUser.id, moduleId: mgrModules[2].id, status: "NOT_STARTED", completionPct: 0 },
    ]
  });

  console.log("Seeding Hertz complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
