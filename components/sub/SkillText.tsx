/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import {
  slideInFromLeft,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const SkillText = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        controls.start("visible");
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-cyan-700 opacity-[0.9]"
      >
        <SparklesIcon className="text-cyan-500 mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px] font-bold">
          Made with Next.js 14
        </h1>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[30px]"
      >
        Making softwares with modern technologies
      </motion.div>
    </div>
  );
};

export default SkillText;
