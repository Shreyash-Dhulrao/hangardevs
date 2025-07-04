import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiUser, FiMail, FiMessageCircle } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const formRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex justify-center px-4 mt-20">
      <div
        ref={formRef}
        className="w-full max-w-3xl backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 p-6 sm:p-10 md:p-14 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950/50"
      >
        {/* Glowing Border Effect */}
        <div className="absolute rounded-3xl z-0"></div>

        <h2 className="relative z-10 text-4xl font-montserrat font-medium text-center dark:text-white mb-10">
          Get in Touch
        </h2>

        <form className="relative z-10 space-y-8">
          {/* Name Field */}
          <div className="relative">
            <FiUser className="absolute left-4 top-4 dark:text-white/70 text-xl" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white dark:placeholder-white/60 border border-white/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <FiMail className="absolute left-4 top-4 dark:text-white/70 text-xl" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white dark:placeholder-white/60 border border-white/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <FiMessageCircle className="absolute left-4 top-4 dark:text-white/70 text-xl" />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white dark:placeholder-white/60 border border-white/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 transition-all duration-300 dark:text-white font-semibold px-8 py-3 rounded-xl shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
