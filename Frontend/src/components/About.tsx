import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import TechMention from "./TextMention";

import {
    FaReact,
    FaAngular,
    FaPython,
    FaNodeJs 
} from "react-icons/fa";
import {
    SiFastapi,
    SiMongodb
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            const imageTargets = [
                { id: "#image1-container", initialRotate: -45, initialX: "-100%", initialY: "-100%", finalRotate: -12 },
                { id: "#image2-container", initialRotate: 45,  initialX: "100%",  initialY: "-100%", finalRotate: 6 },
                { id: "#image3-container", initialRotate: 45,  initialX: "-100%", initialY: "100%",  finalRotate: 12 },
                { id: "#image5-container", initialRotate: -45, initialX: "100%",  initialY: "100%",  finalRotate: -6 },
                { id: "#image4-container", initialRotate: 80,  initialX: "100%",  initialY: "-100%", finalRotate: 12 },
                { id: "#image6-container", initialRotate: -80, initialX: "100%",  initialY: "100%",  finalRotate: -12 },
            ];

            imageTargets.forEach(target => {
                gsap.fromTo(target.id,
                    {
                        opacity: 0,
                        rotate: target.initialRotate,
                        x: target.initialX,
                        y: target.initialY,
                    },
                    {
                        opacity: 1,
                        rotate: target.finalRotate,
                        x: 0,
                        y: 0,
                        duration: 0.5, 
                        scrollTrigger: {
                            trigger: "#images-container",
                            start: "clamp(top 45%)", 
                            end: "+=200",
                            scrub: 1,
                        },
                    }
                );
            });
        });
        return () => mm.revert();
    }, []);

    return (
        <section id="about-section" className="w-full max-w-[1208px] mx-auto flex flex-col overflow-x-clip sm:overflow-x-visible py-10 sm:py-20">
            <div id="images-container" className="relative sm:-left-6 max-w-[1000px] grid grid-rows-2 grid-cols-2 sm:grid-cols-3 justify-items-center items-center mx-auto">
                <div id="image1-container" className="relative z-20 w-[130%] will-change-transform pointer-events-none bottom-[-15%] left-[5%] motion-safe:opacity-0 motion-safe:-rotate-45 motion-safe:-translate-x-full motion-safe:-translate-y-full motion-reduce:-rotate-12">
                    <img
                        src="/about-image1.jpg" id="image1" alt="image 1" width={4032} height={3024}
                        className="select-none rounded-xl brightness-90 w-full h-auto" draggable="false" loading="lazy"
                    />
                </div>
                <div id="image2-container" className="relative z-20 -bottom-[6%] right-[-6%] sm:right-[-15%] motion-safe:rotate-45 will-change-transform pointer-events-none motion-safe:opacity-0 motion-safe:translate-x-full motion-safe:-translate-y-full motion-reduce:rotate-6">
                    <img
                        src="/about-image2.jpg" id="image2" alt="image 2" width={3024} height={4032}
                        className="select-none rounded-xl brightness-90 w-full h-auto" draggable="false" loading="lazy"
                    />
                </div>
                <div id="image3-container" className="relative z-10 w-[105%] bottom-[15%] left-[-5%] sm:left-[5%] sm:col-start-1 sm:row-start-2 will-change-transform pointer-events-none motion-safe:rotate-45 motion-safe:opacity-0 motion-safe:-translate-x-full motion-reduce:rotate-12 motion-safe:translate-y-full">
                    <img
                        src="/about-image5.jpg" id="image3" alt="image 3" width={3024} height={4032}
                        className="select-none rounded-xl brightness-90 w-full h-auto" draggable="false" loading="lazy"
                    />
                </div>
                <div id="image4-container" className="relative z-20 hidden sm:block w-[95%] left-[10%] bottom-0 will-change-transform pointer-events-none motion-reduce:rotate-12 motion-safe:rotate-[80deg] motion-safe:opacity-0 motion-safe:-translate-y-full motion-safe:translate-x-full">
                    <img
                        src="/about-image6.jpg" id="image4" alt="image 4" width={2160} height={2880}
                        className="select-none rounded-xl brightness-90 w-full h-auto" draggable="false" loading="lazy"
                    />
                </div>
                <div id="image5-container" className="relative w-[130%] top-[-18%] sm:w-[140%] will-change-transform pointer-events-none motion-reduce:-rotate-6 motion-safe:-rotate-45 motion-safe:opacity-0 motion-safe:translate-x-full motion-safe:translate-y-full">
                    <img
                        src="/about-image3.jpg" id="image5" alt="image 5" width={4032} height={3024}
                        className="select-none rounded-xl brightness-90 w-full h-auto" draggable="false" loading="lazy"
                    />
                </div>
                <div id="image6-container" className="relative hidden z-20 sm:block w-[95%] left-[10%] top-[-26%] will-change-transform pointer-events-none motion-reduce:-rotate-12">
                    <img
                        src="/about-image4.jpg" id="image6" alt="image 6" width={3024} height={4032}
                        className="select-none rounded-lg brightness-90 w-full h-auto" draggable="false" loading="lazy"
                    />
                </div>
            </div>

            <div id="about-text-container" className="w-full pb-40 px-5 sm:px-24 font-light text-base mt-10 sm:mt-20">
                <div id="about-body" className="mt-7 tracking-tight text-white leading-relaxed font-light text-base lg:text-xl">
                    <div id="about-para-1" className="mt-7 tracking-tight leading-relaxed font-light text-base lg:text-xl">
                        Having studied Computer Science at Wilfrid Laurier University I have a passion for building things
                        that are useful, thoughtful, and a little bit different. Over the past few years, I’ve worked
                        on a range of projects, from a personalized AI chat assistant with emotional voice responses,
                        to an Android app that helps users stay on top of their water intake.
                    </div>
                    <div id="about-para-2" className="mt-7">
                        I enjoy working across the stack. On the frontend, I like using tools like{" "}
                        <TechMention IconComponent={FaReact} colorClass="text-react" link="https://react.dev/" name="React" />
                        {" and "}
                        <TechMention IconComponent={FaAngular} colorClass="text-angular" link="https://angular.io/" name="Angular" />
                        {" "}to create clean, responsive interfaces. On the backend, I’ve worked with{" "}
                        <TechMention IconComponent={FaPython} colorClass="text-python" link="https://www.python.org/" name="Python" />
                        {" and "}
                        <TechMention IconComponent={SiFastapi} colorClass="text-fastapi" link="https://fastapi.tiangolo.com/" name="FastAPI" />
                        ,{" "}
                        <TechMention IconComponent={FaNodeJs} colorClass="text-nodejs" link="https://nodejs.org/" name="Node.js" />
                        , and databases like{" "}
                        <TechMention IconComponent={BiLogoPostgresql} colorClass="text-postgresql" link="https://www.postgresql.org/" name="PostgreSQL" />
                        {" and "}
                        <TechMention IconComponent={SiMongodb} colorClass="text-mongodb" link="https://www.mongodb.com/" name="MongoDB" />
                        . I also have a strong interest in machine learning, especially when it helps create smarter and more personal user experiences.
                    </div>
                    <div id="about-para-3" className="mt-7 tracking-tight leading-relaxed font-light text-base lg:text-xl">
                        When I'm not coding, you’ll probably find me behind a camera, repairing mechanical watches, or playing a few rounds of mahjong with friends.
                        I like projects that let me combine precision and creativity, whether that's in software or the real world.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
