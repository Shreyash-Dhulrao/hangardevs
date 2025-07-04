import React, { useEffect, useRef } from "react";
import { FaLaptopCode, FaCodeBranch } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import gsap from "gsap";

const serviceList = [
  {
    icon: <FaLaptopCode className="text-blue-500 fw-light text-5xl" />,
    title: "Web Development",
    description:
      "We build responsive, fast, and secure websites tailored to your business needs using modern technologies.",
  },
  {
    icon: <FaCodeBranch weight="light" color="#a855f7" className="text-purple-500 fw-light text-5xl" />,
    title: "Software Development",
    description:
      "Custom software solutions designed to solve your unique business challenges and scale with growth.",
  },
  {
    icon: <MdDesignServices className="text-pink-500 fw-light text-5xl" />,
    title: "UI/UX Design",
    description:
      "Crafting stunning, intuitive interfaces that connect users with your product seamlessly.",
  },
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="transition duration-300 relative py-20 px-4 sm:px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-montserrat md:text-5xl font-extrabold mb-4 text-zinc-900 dark:text-white tracking-wide">
          Our Services
        </h2>
        <p className="text-zinc-600 font-quicksand dark:text-zinc-300 mb-12 max-w-2xl mx-auto text-lg">
          Explore the futuristic solutions we offer—crafted for scale, speed, and success.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-700 backdrop-blur-xl p-6 rounded-2xl shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute top-2 right-2 w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-montserrat font-bold text-zinc-800 dark:text-white mb-2 tracking-wide">
                {service.title}
              </h3>
              <p className="text-zinc-600 font-quicksand dark:text-zinc-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
