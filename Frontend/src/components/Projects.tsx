import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useState, useRef } from 'react';

import { projectsData } from '../lib/data';
import type { Project } from '../lib/data';

import { FaGithub, FaReact, FaNodeJs, FaPython, FaAngular } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiMongodb, SiExpress, SiVite, SiFastapi, SiKotlin, SiJetpackcompose, SiAmazonwebservices } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const brandColors: { [key: string]: string } = {
    react: '#61DAFB', angular: '#DD0031', typescript: '#3178C6', vite: '#646CFF',
    tailwindcss: '#06B6D4', gsapanimationlibrary: '#88CE02', nextjs: '#000000',
    nodejs: '#68A063', expressjs: '#000000', mongodb: '#4DB33D',
    python: '#3776AB', fastapi: '#009688', postgresql: '#336791',
};

const techIconMap: { [key: string]: { Icon: React.ElementType, colorKey: string, link?: string } } = {
    "React": { Icon: FaReact, colorKey: "react", link: "https://react.dev/" },
    "Angular": { Icon: FaAngular, colorKey: "angular", link: "https://angular.io/" },
    "TypeScript": { Icon: SiTypescript, colorKey: "typescript", link: "https://www.typescriptlang.org/" },
    "Vite": { Icon: SiVite, colorKey: "vite", link: "https://vitejs.dev/" },
    "TailwindCSS": { Icon: SiTailwindcss, colorKey: "tailwindcss", link: "https://tailwindcss.com/" },
    "Next.js": { Icon: SiNextdotjs, colorKey: "nextjs", link: "https://nextjs.org/" },
    "Node.js": { Icon: FaNodeJs, colorKey: "nodejs", link: "https://nodejs.org/" },
    "Express.js": { Icon: SiExpress, colorKey: "expressjs", link: "https://expressjs.com/" },
    "MongoDB": { Icon: SiMongodb, colorKey: "mongodb", link: "https://www.mongodb.com/" },
    "Python": { Icon: FaPython, colorKey: "python", link: "https://www.python.org/" },
    "FastAPI": { Icon: SiFastapi, colorKey: "fastapi", link: "https://fastapi.tiangolo.com/" },
    "PostgreSQL": { Icon: BiLogoPostgresql, colorKey: "postgresql", link: "https://www.postgresql.org/" },
    "Kotlin": { Icon: SiKotlin, colorKey: "kotlin", link: "https://www.kotlinlang.org/" },
    "Compose": { Icon: SiJetpackcompose, colorKey: "compose", link: "https://developer.android.com/compose" },
    "AWS": { Icon: SiAmazonwebservices, colorKey: "aws", link: "https://docs.aws.amazon.com/" },
};

const ProjectCardTechIcon = ({ techName }: { techName: string }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const techDetails = techIconMap[techName];

    if (!techDetails) {
        return <span className="text-xs px-2 py-1 bg-black text-neutral-300 rounded-full m-0.5">{techName}</span>;
    }

    const { Icon, colorKey, link } = techDetails;
    const fillColor = brandColors[colorKey] || 'currentColor';

    return (
        <a
            href={link || '#'}
            target={link ? "_blank" : undefined}
            rel={link ? "noopener noreferrer" : undefined}
            className="relative inline-block p-1.5 bg-black hover:bg-neutral-600 rounded-full transition-colors m-0.5"
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
            aria-label={techName}
        >
            <Icon className="size-4 sm:size-5" style={{ fill: fillColor }} />
            {isTooltipVisible && (
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-neutral-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-30 pointer-events-none">
                    {techName}
                    <span className="absolute w-2 h-2 bg-neutral-900 transform rotate-45 top-full -mt-1 left-1/2 -translate-x-1/2" />
                </span>
            )}
        </a>
    );
};

const Projects = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        gsap.from('#project-section-title', {
            scrollTrigger: {
                trigger: `#project-section-title`,
                start: "top bottom-=100px",
                toggleActions: "play none none none",
            },
            y: 50, opacity: 0, duration: 0.8, ease: 'power2.out',
        });

        mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
            projectsData.forEach((project, index) => {
                gsap.from(`#${project.id}`, {
                    scrollTrigger: {
                        trigger: `#${project.id}`,
                        start: "top bottom-=100px",
                        toggleActions: "play none none none",
                    },
                    opacity: 0, x: index % 2 === 0 ? -50 : 50, duration: 0.7, ease: 'power2.out',
                    delay: index * 0.1,
                });
            });
        });

        mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
            const cards = gsap.utils.toArray<HTMLElement>('.project-card-desktop');
            const container = document.querySelector<HTMLElement>("#projects-container-desktop");

            if (cards.length === 0 || !container) return;

            const desktopTl = gsap.timeline();
            const containerHeight = container.offsetHeight;

            cards.forEach((card, index) => {
                gsap.set(card, {
                    yPercent: -90,
                    opacity: 0,
                    scale: 0.85,
                    zIndex: index,
                });
            });

            cards.forEach((card, index) => {
                const cardElement = card;

                desktopTl.to(cardElement, {
                    y: () => (containerHeight - cardElement.offsetHeight) / 2,
                    opacity: 1,
                    scale: 1,
                    zIndex: cards.length + index,
                    ease: "power2.inOut",
                    duration: 0.6,
                }, index * 0.8);

                if (index < cards.length - 1) {
                    desktopTl.to(cardElement, {
                        y: () => ((containerHeight - (cards[index + 1] as HTMLElement).offsetHeight) / 2) + 30 + (index * 10),
                        opacity: 0.4,
                        scale: 0.9,
                        zIndex: index,
                        ease: "power2.inOut",
                        duration: 0.5,
                    }, (index + 1) * 0.8 - 0.1);
                }
            });

            const st = ScrollTrigger.create({
                animation: desktopTl,
                trigger: "#projects-container-desktop",
                pin: true,
                start: "top top+=600px",
                end: () => `+=${(cards.length) * (containerHeight * 0.45)}`,
                scrub: 1.2,
                invalidateOnRefresh: true,
            });

            return () => {
                st?.kill();
                desktopTl?.kill();
            };
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="projects-section" className="py-16 sm:py-24 text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 id="project-section-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left mb-12 sm:mb-20 text-transparent bg-clip-text bg-gradient-to-r text-white">
                    My Projects
                </h2>

                <div className="md:hidden space-y-12">
                    {projectsData.map((project: Project) => (
                        <div
                            key={project.id}
                            id={project.id}
                            className="project-card-mobile bg-neutral-700/50 rounded-xl shadow-2xl overflow-hidden group"
                        >
                            <img
                                src={project.image.url}
                                alt={`${project.title} preview`}
                                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                            <div className="p-5 sm:p-6">
                                <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                                <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed min-h-[60px] sm:min-h-[80px]">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.technologies.map((tech) => (
                                        <ProjectCardTechIcon key={tech} techName={tech} />
                                    ))}
                                </div>
                                <div className="flex items-center space-x-4">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}
                                       className="text-gray-400 hover:text-sky-400 transition-colors flex items-center">
                                        <FaGithub className="size-5 mr-1.5" /> GitHub
                                    </a>
                                    {project.demoLink && (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}
                                           className="text-gray-400 hover:text-sky-400 transition-colors flex items-center">
                                            <FiExternalLink className="size-5 mr-1.5" /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div id="projects-container-desktop" className="hidden md:block relative min-h-screen">
                    {projectsData.map((project: Project) => (
                        <div
                            key={project.id}
                            id={project.id}
                            className={`project-card-desktop bg-white backdrop-blur-sm rounded-2xl shadow-2xl 
                                        h-[650px] w-[600px] mx-auto 
                                    absolute top-0 left-1/2 -translate-x-1/2 
                                        will-change-transform group
                                        flex flex-col 
                                        overflow-hidden`}
                        >
                            <div className="flex-[0.2] pt-6 sm:p-8  flex items-start justify-start">
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-black">{project.title}</h3>
                                    <p className="text-neutral-700 mb-5 leading-relaxed text-sm lg:text-base min-h-[60px] lg:min-h-[80px]">{project.description}</p>
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.technologies.map((tech) => (
                                            <ProjectCardTechIcon key={tech} techName={tech} />
                                        ))}
                                    </div>
                                    <div className="flex items-center space-x-5">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}
                                           className="text-neutral-500 hover:text-sky-500 transition-colors flex items-center text-sm">
                                            <FaGithub className="size-5 mr-2" /> GitHub
                                        </a>
                                        {project.demoLink && (
                                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}
                                               className="text-neutral-500 hover:text-sky-500 transition-colors flex items-center text-sm">
                                                <FiExternalLink className="size-5 mr-2" /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-[0.8] pl-6 pr-6 flex flex-col justify-center">
                                <img
                                    src={project.image.url}
                                    alt={`${project.title} preview`}
                                    className="w-full h-full max-h-[380px] object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300 -mt-4"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a href="https://github.com/meeroTheo?tab=repositories"
                       target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center text-lg font-semibold text-white hover:text-sky-300 transition-colors group">
                        Explore More on GitHub
                        <MdArrowOutward className="ml-2 size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
