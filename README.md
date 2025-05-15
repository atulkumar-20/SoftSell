# SoftSell

A modern NextJS Typescript application for streamlined sales and customer engagement with AI-powered features.

Live : https://softsell-pink.vercel.app/

## Features

- **AI Chat Integration**: Embedded AI chatbot for real-time customer assistance
- **Modern UI**: Clean, responsive interface built with Next.js
- **TypeScript Support**: Full type safety throughout the application
- **Environment Configuration**: Easy setup with environment variables

## Getting Started

First, set up your environment variables:

```bash
# Create a .env.local file with the following variables
NEXT_PUBLIC_AGENT_ROOT_ID=your-agent-root-id
NEXT_AGENT_FORM_ID=your-agent-form-id
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
softsell/
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js App Router pages
│   ├── components/   # Reusable UI components
│   ├── sections/     # Page sections including AIChatBot
│   ├── styles/       # Global styles
│   └── utils/        # Utility functions
├── .env.local        # Environment variables (create this)
└── next.config.js    # Next.js configuration
```

## AI Integration

The application integrates an AI chatbot using JotForm's Agent service. The chatbot is configured in `src/sections/AIChatBot.tsx` and can be customized with:

- Custom greeting messages
- Visual styling (colors, position)
- Behavior settings (draggable, maximizable)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.
