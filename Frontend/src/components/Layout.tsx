import { useEffect, useState } from 'react';
import SocialIcons from './SocialIcons';

const headshotSrc = '/assets/self.jpg';

const scrollingTexts = [
  "Full Stack Developer",
  "Photographer",
  "Data Analyst",
  "Watch Fixer",
];

const Layout = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % scrollingTexts.length);
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section id="hero" className="w-full max-w-[1208px] h-fit sm:h-screen min-h-fit mx-auto px-2 py-2">

      <main
        id="container-bg"
        className="w-full h-full min-h-[400px] sm:min-h-[720px] font-light
                   border-[1px] border-neutral-300 shadow-custom rounded-[32px]
                   flex flex-col justify-between bg-white
                   pt-[70px] sm:pt-[80px] md:pt-[140px] p-4 sm:px-16 lg:pb-16 text-black"
      >
        <div id="layout" className="pt-[15em]">
          <div id="intro" className="flex flex-col items-start sm:flex-row sm:items-center gap-2 tracking-tighter">
            <div id="headshot-container" className="relative flex justify-center items-center mb-4 sm:mb-0 sm:mr-4">
              <div id="headshot" className="relative w-20 h-20 lg:w-28 lg:h-28 border-black border-[1px] bg-white rounded-full overflow-hidden saturate-150 hover:animate-spin hover:saturate-200 group">
                <img alt="Headshot Photo" draggable="false" className="w-full h-full object-cover select-none" src={headshotSrc} />
              </div>
            </div>
            <div>
              <h1 id="hey-there" className="group text-xl sm:text-2xl lg:text-3xl">
                {' '}Hi,{' '}I'm{' '}
                <span id="myname" className="inline-block bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
                  Meer Theodore Baloch
                </span>
              </h1>
              <p id="job-status" className="text-sm sm:text-base lg:text-xl font-extralight opacity-60">
                Software Engineering and Data Science
              </p>
            </div>
          </div>

          <p id="im-a" className="mt-6 sm:mt-8 text-2xl xs:text-4xl lg:tracking-tight lg:text-6xl">
            I'm a driven and enthusiastic software engineer who builds high-performing, scalable, and visually appealing products.
          </p>

          <div
            id="im-also-container"
            className="mt-4 text-2xl xs:text-4xl lg:text-6xl "
            style={{
              lineHeight: '1.35em',
            }}
          >
            I am also a {}
            <div
              id="scroll-text-wrapper"
              className="inline-block font-medium relative align-top"
              style={{
                height: '1.5em',
                lineHeight: '1.35em',
              }}
            >
              {scrollingTexts.map((text, index) => (
                <span
                  key={text}
                  className={`
                    bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient
                    transition-opacity duration-700 ease-in-out
                    motion-safe:absolute motion-safe:left-0 motion-safe:top-0 motion-safe:whitespace-nowrap
                    ${index === currentTextIndex ? 'motion-safe:opacity-100' : 'motion-safe:opacity-0 motion-safe:pointer-events-none'}`}>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <SocialIcons />
        </div>
      </main>
    </section>
  );
};

export default Layout;
