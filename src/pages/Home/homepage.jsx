import Header from "../../components/home/header";
import About from "../../components/about/about";
import Services from "../../components/services/services";
import Contact from "../../components/contact/contact-us";
import Skills from "../../components/skills/skills";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../../components/footer/footer";

gsap.registerPlugin(ScrollTrigger);

const homepage = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to section on route change
    const sectionId = location.pathname.substring(1); // e.g., 'about'
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(section.id),
        onEnterBack: () => setActive(section.id),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const setActive = (id) => {
    // You can update active class in navbar here
    // e.g., set state, or directly add/remove class
    const links = document.querySelectorAll("nav a"); // adjust to your nav selector
    links.forEach((link) => {
      if (link.getAttribute("href") === `/${id}`) {
        link.classList.add("text-blue-500"); // or any active class
      } else {
        link.classList.remove("text-blue-500");
      }
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black w-screen min-w-14">
      {/* Footer Background Layer */}
      <div className="bottom-0 left-0 right-0" />

      {/* Main Content */}
      <div className="flex flex-col pb-20 xl:mb-74 lg:mb-68 mb-28 md:rounded-b-[40px] rounded-b-2xl lg:rounded-b-[80px] border border-zinc-400 dark:border-zinc-700 bg-zinc-200/50 dark:bg-zinc-900 shadow-xl">
        <section id="home">
          <Header />
        </section>
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        <section id="services" className="scroll-mt-20">
          <Services />
        </section>
        <section id="skills" className="scroll-mt-5">
          <Skills />
        </section>
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </div>

      {/* Footer is revealed from behind */}
      <Footer />
    </div>

  );
};

export default homepage;
