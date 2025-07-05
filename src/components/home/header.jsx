import React, { useLayoutEffect, useRef } from "react";
import Image1 from "../../assets/Images/images/website-background.jpg";
import Link_button from "../button/link_button";
import Rocket from '../../assets/Images/images/rocket_transparent.png'
import Mobile from '../../assets/Images/images/mobile_transparent.png'
import Security from '../../assets/Images/images/security_transprent.png'

import gsap from "gsap";



const Header = () => {
  const cardsRef = useRef([]);

  const features = [
  {
    icon: Rocket,
    title: 'Blazing Fast Performance',
    desc: 'Websites and apps that load in seconds — optimized for speed so your users never have to wait, improving engagement and SEO.',
  },
  {
    icon: Mobile,
    title: 'Mobile-First Experience',
    desc: 'Seamless performance across all devices — your users get a smooth, intuitive experience whether they’re on desktop, tablet, or mobile.',
  },
  {
    icon: Security,
    title: 'Secure by Design',
    desc: 'Built-in security best practices to protect user data, prevent hacks, and establish trust with your audience from day one.',
  },
];


  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // Animate each card individually with ScrollTrigger
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 100%",
          toggleActions: "play none none none",
        },
      });
    });
  });

  return () => ctx.revert();
}, []);

  return (
    <div>
    {/* HERO SECTION */}
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center" id="home">
      <img
        src={Image1}
        alt="Hero"
        className="absolute inset-0 md:w-full w-auto h-full object-cover  z-0 mask-b-from-80% mask-b-to-100%"
      />
      <div className="relative z-10 bg-white/70 dark:bg-zinc-900/75 backdrop-blur-xl shadow-sm rounded-3xl p-6 sm:p-10 md:p-12 max-w-[90%] md:max-w-2xl lg:max-w-4xl mx-auto text-center md:text-left">
        <h3 className="text-2xl md:text-4xl font-montserrat font-semibold text-blue-600 mb-4">
          Transforming Ideas Into Scalable Web Solutions
        </h3>
        <p className="text-zinc-600 dark:text-zinc-200 font-quicksand text-base md:text-lg leading-relaxed mb-6">
          Our team turns your digital vision into reality. We create high-performance websites, web apps, and custom software with a focus on usability, security, and long-term value.
        </p>
        <div className="flex justify-center md:justify-start">
          <Link_button url="/contact" />
        </div>
      </div>
    </div>

    {/* FEATURES SECTION */}
    <div className="bg-zinc-200 dark:bg-zinc-800 py-12 px-4 w-full sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex items-start gap-4"
          >
            <div className="min-w-[40px] text-2xl text-zinc-900 dark:text-cyan-500">
              <img src={feature.icon} className="w-3/4" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Header;
