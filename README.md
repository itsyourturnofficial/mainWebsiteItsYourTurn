# Its Your Turn — IoT & Embedded Systems Placement Training

Welcome to the official repository for **Its Your Turn**, a premier EdTech platform dedicated to launching careers in IoT and Embedded Systems. We offer comprehensive, job-oriented training in ESP32, STM32, AWS IoT, and PCB Design with 100% placement support.

## 🚀 Features

- **Comprehensive Curriculum**: Detailed courses on ESP32, STM32, AWS IoT, PCB Design, and more.
- **Placement Support**: Dedicated section for placement statistics, success stories, and alumni testimonials.
- **Responsive Design**: Fully responsive layout optimized for all devices, built with Tailwind CSS.
- **Modern UI**: Clean and professional interface using Shadcn UI components and Lucide React icons.
- **Performance Optimized**: Built with Next.js 16 (App Router) for speed and SEO optimization.
- **Blog & Insights**: Latest industry trends and articles on IoT and Embedded Systems.

## 🛠️ Tech Stack

This project is built with a modern frontend stack:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) via `next/font`
- **Animation**: `tw-animate-css`
- **Form Handling**: `react-hook-form` & `zod`
- **Date Handling**: `date-fns` & `react-day-picker`

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (or yarn/pnpm/bun)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/its-your-turn.git
    cd its-your-turn
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📂 Project Structure

Here's an overview of the project's file structure:

```
├── app/                  # Next.js App Router pages and layouts
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout with metadata and font configuration
│   └── page.tsx          # Homepage component
├── components/           # Reusable UI components
│   ├── placement/        # Specific components for the placement/landing pages
│   └── ui/               # Shadcn UI primitive components
├── lib/                  # Utility functions and shared logic
├── content/              # Blog posts or static content (if applicable)
├── public/               # Static assets (images, fonts, etc.)
├── .eslintrc.json        # ESLint configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

[MIT License](LICENSE) (or specify your license here)
