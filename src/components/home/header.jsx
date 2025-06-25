import React, { useLayoutEffect, useRef } from "react";
import Image1 from "../../assets/Images/images/website-background.jpg";
import Link_button from "../button/link_button";
import { FaUser } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const cardsRef = useRef([]);

  const features = [
    {
      icon: <FaUser size={40} className="text-black dark:text-white" />,
      title: "Free Delivery",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: <FaUser size={40} className="text-black dark:text-white" />,
      title: "Support 24/7",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: <FaUser size={40} className="text-black dark:text-white" />,
      title: "100% Authentic",
      desc: "Lorem ipsum dolor sit amet.",
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
      <div className="relative w-full flex h-screen overflow-hidden" id="home">
        <img
          src={Image1}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex gap-3 flex-col top-40 left-10 p-10 rounded-3xl justify-center items-center md:items-start px-6 md:px-12 bg-white/70 dark:bg-zinc-900/75 backdrop-blur-md shadow-sm w-2/3 h-fit transition duration-300">
          <h3 className="text-2xl md:text-4xl font-montserrat font-semibold text-blue-600 mb-4 text-center md:text-left">
            Transforming Ideas Into Scalable Web Solutions
          </h3>
          <p className="text-zinc-600 dark:text-zinc-200 font-quicksand text-base md:text-lg max-w-10/12 text-center md:text-left leading-relaxed">
            Our team turns your digital vision into reality. We create high-performance websites, web apps, and custom software with a focus on usability, security, and long-term value.
          </p>
          <Link_button url="/services" />
        </div>
      </div>

      <div className="bg-zinc-150 dark:bg-zinc-800 py-10 px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flex items-start gap-4 w-full md:w-1/3"
            >
              <div className="min-w-[40px]">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
