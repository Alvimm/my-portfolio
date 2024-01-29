/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useRef } from 'react';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { myProjects } from "@/constants/myProjects"
import ProjectCard from "../sub/ProjectCard"
import { motion, useAnimation } from 'framer-motion';

const Projects = () => {
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
    <motion.div
      ref={ref}
      variants={slideInFromTop}
      initial="hidden"
      animate={controls}
      className='flex flex-col items-center justify-center py-20'
      id="projects"
    >
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-300 '>
        My projects
      </h1>
      <h2
        className="cursive text-[23px] text-gray-200 mb-5 mt-[10px] text-center pb-10"
      >
        “Quality is more important than quantity. One home run is much better than two doubles.”
      </h2>
      <motion.div       ref={ref}
      variants={slideInFromLeft(0.8)}
      initial="hidden"
      animate={controls} className='h-full w-full grid md:grid-cols-3 gap-10 px-10 pb-10'>
        {myProjects.map((project) => (
          <ProjectCard
            src={project.image}
            title={project.title}
            description={project.description}
            url={project.link}
            key={project.title}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;

