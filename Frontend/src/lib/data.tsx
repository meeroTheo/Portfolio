export interface Project {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  technologies: string[];
  githubLink: string;
  demoLink?: string;
}

export const projectsData: Project[] = [
  {
    id: "project0",
    title: "Portfolio Website",
    description: "The very website you're looking at! Built with React, TypeScript, Vite, TailwindCSS, and GSAP for smooth animations.",
    image: { url: "/public/assets/project1.png" }, 
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
    githubLink: "https://github.com/meeroTheo/Portfolio",
  },
  {
    id: "project1",
    title: "Personalized Chat Assistant",
    description: "Built a personalized voice assistant that generates emotionally expressive speech using a fine-tuned VITS model and custom LLM, with a React frontend, FastAPI backend, and real-time AWS deployment.",
    image: { url: "/public/assets/project2.png" },
    technologies: ["Python", "PostgreSQL", "FastAPI", "React", "AWS"],
    githubLink: "https://github.com/meeroTheo/amadeusWeb",
  },
  {
    id: "project2",
    title: "Just Drink Water",
    description: "Developed a native Android app in Kotlin using Jetpack Compose and MVVM architecture to track water intake, send reminders, and store hydration data locally with Room Database.",
    image: { url: "/public/assets/project3.png" },
    technologies: ["Kotlin", "Compose"],
    githubLink: "https://github.com/meeroTheo/just-drink-water",
  },
];
