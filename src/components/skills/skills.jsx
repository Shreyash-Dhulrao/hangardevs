import React, { useEffect, useRef } from 'react';
import HTML from '../../assets/Images/skills/html.png'
import CSS from '../../assets/Images/skills/css.png'
import JAVASCRIPT from '../../assets/Images/skills/javaScript.png'
import REACT from '../../assets/Images/skills/reactJs.png'
import REDUX from '../../assets/Images/skills/redux.png'
import NODEJS from '../../assets/Images/skills/nodeJs.png'
import EXPRESSJS from '../../assets/Images/skills/expressJs.png'
import MONGODB from '../../assets/Images/skills/mongoDb.png'
import PHP from '../../assets/Images/skills/php.png'
import MYSQL from '../../assets/Images/skills/mySql.png'
import TAILWINDCSS from '../../assets/Images/skills/tailwindCss.png'



import gsap from 'gsap';

const Skills = () => {
  const sliderRef = useRef(null);

  const skills = [
    { icon: HTML, name: 'HTML' },
    { icon: CSS , name: 'CSS' },
    { icon: JAVASCRIPT , name: 'Javascript' },
    { icon: REACT , name: 'REACT Js' },
    { icon: REDUX , name: 'REDUX' },
    { icon: NODEJS , name: 'NODE JS' },
    { icon: EXPRESSJS , name: 'EXPRESS JS' },
    { icon: MONGODB , name: 'MONGODB' },
    { icon: PHP , name: 'PHP' },
    { icon: MYSQL , name: 'MYSQL' },
    { icon: TAILWINDCSS , name: 'TAILWINDCSS' },

  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".skill-slide", {
        x: "-100%",
        ease: "linear",
        duration: 80,
        repeat: -1,
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
  <div className="overflow-hidden dark:bg-zinc-950/50 bg-zinc-50 py-10">
    <div className="flex justify-center mb-5">
      <h2 className="md:text-4xl text-2xl font-montserrat font-bold text-zinc-900 dark:text-white">
        Skills
      </h2>
    </div>

    <div className="relative w-full" ref={sliderRef}>
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-zinc-50 dark:from-zinc-950/50 to-transparent z-10"></div>

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-zinc-50 dark:from-zinc-950/50 to-transparent z-10"></div>

      <div className="flex w-max skill-slide">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="w-fit mx-4 dark:text-white p-4 rounded-lg flex gap-3 items-center justify-center"
          >
            <div className="mb-2 bg-zinc-200/50 dark:bg-zinc-800 rounded-lg p-2">
              <img src={skill.icon} alt="" className="w-14" />
            </div>
            <div className="md:text-4xl text-xl font-semibold font-montserrat uppercase">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Skills;
