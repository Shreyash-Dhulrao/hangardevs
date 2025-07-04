import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import aboutimg from "../../assets/Images/images/about-image.jpg"; // update your path


const AboutSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(contentRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="transition duration-300 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 py-16 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div
          ref={imageRef}
          className="rounded-3xl overflow-hidden shadow-xl w-full h-full sticky top-32 self-start hidden lg:block"
        >
          <img
            src={aboutimg}
            alt="About Us"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
          />
        </div>

        <div ref={contentRef} className="space-y-6 text-justify">
          <h2 className="text-3xl font-montserrat md:text-4xl font-bold text-zinc-900 dark:text-white">
            About Us
          </h2>

          <p className="text-zinc-700 font-quicksand dark:text-zinc-300 leading-relaxed text-sm">
            The purpose of HangarDevs is to deliver cutting-edge technological solutions to a growing network of clients, including startups, corporations, and industrial enterprises.
          </p>

          <p className="text-zinc-700 font-quicksand dark:text-zinc-300 leading-relaxed text-sm">
            While HangarDevs has earned recognition across Maharashtra, India, the name itself carries a powerful and thoughtful meaning. It’s derived from two concepts:
          </p>

          <p className="text-sm font-quicksand font-semibold text-zinc-800 dark:text-zinc-100"><b>Hangar + Devs</b></p>

          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm">
            <li>
              <b>Hangar</b> refers to a large space used to build and house aircraft—symbolizing our vision of being a launchpad for ambitious, high-impact technological projects.
            </li>
            <li>
              <b>Devs</b> is short for Developers, representing the passionate minds who innovate, code, and create meaningful solutions.
            </li>
          </ul>

          <p className="text-zinc-700 font-quicksand dark:text-zinc-300 leading-relaxed text-sm">
            Together, HangarDevs means “a space where innovative ideas are engineered into reality by developers”—a creative hub for transforming technology into impactful solutions.
          </p>

          <p className="text-zinc-700 font-quicksand dark:text-zinc-300 leading-relaxed text-sm">
            We chose the name HangarDevs because it reflects our bold aspirations and commitment to building futuristic, scalable, and reliable software systems. It embodies our mission: to solve real-world problems of today and tomorrow using the power of technology and innovation.
          </p>
        </div>
        </div>
    </div>
  );
};

export default AboutSection;
