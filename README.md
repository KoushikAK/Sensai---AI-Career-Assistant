# Sensai - AI Career Assistant

Sensai is an AI-powered career assistant designed to help users navigate their professional journey. It provides tools for building optimized resumes, generating tailored cover letters, and preparing for interviews with mock quizzes. The platform also offers industry-specific insights, including salary trends, in-demand skills, and market analysis, to empower users in their career development.

## Features

  * **AI-Powered Resume Builder**: Create and refine ATS-optimized resumes with AI-driven suggestions and multiple templates.
  * **Cover Letter Generation**: Automatically generate personalized cover letters for specific job applications.
  * **Interview Preparation**: Practice with mock interviews and quizzes tailored to your industry and skillset.
  * **Industry Insights**: Access real-time data on salary ranges, market trends, and in-demand skills for various industries.
  * **User Authentication**: Secure sign-up and sign-in functionality using Clerk.

## Tech Stack

  * **Framework**: [Next.js](https://nextjs.org/)
  * **Styling**: [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
  * **Authentication**: [Clerk](https://clerk.com/)
  * **Database**: [Prisma](https://www.prisma.io/) with [PostgreSQL](https://www.postgresql.org/)
  * **AI**: [Google Generative AI (Gemini)](https://ai.google.dev/)
  * **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

  * Node.js (v18.18.0 or later)
  * npm, yarn, or pnpm

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/koushikak/sensai---ai-career-assistant.git
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Set up your environment variables by creating a `.env` file and adding the necessary keys.

4.  Run the development server:

    ```bash
    npm run dev
    ```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```
DATABASE_URL=""
GEMINI_API_KEY=""

# Clerk Env Variables
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/dashboard"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/onboarding"
```

## Available Scripts

In the project directory, you can run:

  * `npm run dev`: Runs the app in development mode.
  * `npm run build`: Builds the app for production.
  * `npm run start`: Starts the production server.
  * `npm run lint`: Lints the project files.

## Project Structure

The project follows a standard Next.js `app` directory structure.

  * `app/(auth)`: Contains authentication-related pages like sign-in and sign-up.
  * `app/(main)`: Contains the main application pages, including the dashboard, resume builder, interview prep, and cover letter generator.
  * `app/(footer)`: Contains footer links like about, blog, careers, contact, faqs, privacy and services.
  * `actions`: Includes server-side actions for handling form submissions, data fetching, and AI interactions.
  * `components`: Contains reusable React components used throughout the application.
  * `lib`: Includes utility functions, Prisma client setup, and other helper modules.
  * `prisma`: Contains the database schema and migration files.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
