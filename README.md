# Product App

A simple product catalog application built with Next.js, MongoDB, and internationalization support.

## Features

- Product listing with cards
- Product detail pages
- Internationalization (English and Arabic)
- RTL support
- Responsive design
- MongoDB integration with Prisma ORM

## Prerequisites

- Node.js 18+ installed
- MongoDB database (local or Atlas)
- npm or yarn package manager

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd product-app
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:

```
MONGODB_URI=your_mongodb_connection_string
```

4. Generate Prisma client and push schema:

```bash
npm run prisma:generate
npm run prisma:push
```

5. Seed the database:

```bash
npm run seed
```

6. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable React components
- `/src/services` - API services and data fetching
- `/src/lib` - Utility functions and configurations
- `/src/locales` - Translation files
- `/prisma` - Database schema and migrations

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:push` - Push schema to database
- `npm run seed` - Seed the database with initial data

## Internationalization

The app supports both English and Arabic languages with RTL support for Arabic. Language preference is stored in localStorage and can be changed using the language switcher in the navigation.
