import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

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

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className='flex justify-center'>
      <div
        ref={formRef}
        className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 border border-zinc-500"
      >
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-6 text-center">
          Contact Us
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block dark:text-white text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-white/5 dark:text-white placeholder-white/60 border border-zinc-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block dark:text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-white/5 dark:text-white placeholder-white/60 border border-zinc-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block dark:text-white text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-xl bg-white/5 dark:text-white placeholder-white/60 border border-zinc-500 focus:outline-none"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-xl shadow-md"
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
