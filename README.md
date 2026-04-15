# Career Transition Navigator (PathForge)

PathForge is a premium web application designed to help professionals smoothly transition to target roles through structured learning paths, mentor tracking, and career tree visualizers.

## Tech Stack
- Next.js 14+ (App Router)
- React
- Prisma ORM + SQLite (for MVP flexibility)
- Lucide React (Icons)
- Vanilla CSS via css modules/globals (No Tailwind)

## Features Included in MVP
1. **Landing Page**: Premium hero section highlighting value propositions.
2. **Onboarding Simulation**: Allows a user to mock-entering their role, skills, and target paths.
3. **Dashboard Engine**: Analyzes readiness score, active learning modules, skill gaps, and next mentor sessions.
4. **Interactive Career Tree**: Outlines the progression path starting from RPA Developer branching into architecture, project management, and product roles.
5. **Mentor Directory**: Lists expert mentors filtered by target role and expertise rating.
6. **Readiness Reports**: A completion summary showcasing milestones and generating a verified certificate simulation.
7. **Database Seeding**: Completely populated local `dev.db` covering skills, user progress, mentoring, and roles.

## How to Run It Locally

1. Make sure you are in the project root:
   ```bash
   cd career-navigator
   ```

2. Install dependencies (if you haven't yet):
   ```bash
   npm install
   ```
   
3. Ensure the SQLite database is mapped (if starting fresh):
   ```bash
   npx prisma db push
   npx tsx prisma/seed.ts
   ```
   *Note: I have already executed these commands for you, so the local database is intact!*

4. Start the Development Server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   **http://localhost:3000**

## Future Enhancements
- **Dynamic Charting**: Integrate D3.js or Recharts to visualize readiness progression over long timelines.
- **Node-based Canvas**: Upgrade the Career Tree from a CSS hierarchy into an interactive draggable node graph using Library like `reactflow`.
- **Integrate Auth**: Upgrade the simulated authentication to an OAuth provider (e.g., NextAuth.js or Clerk).
- **PostgreSQL Migration**: Move from the SQLite MVP DB to PostgreSQL by updating the `provider` in `schema.prisma`.
- **Admin Dashboard**: Build CRUD pages specifically for admins to manage dynamic module assignments and verify uploaded certifications.
