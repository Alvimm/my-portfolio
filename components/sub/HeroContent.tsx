'use client';
import { Socials } from '@/constants';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroContent = () => {
  const handleMailTo = (e: any) => {
    e.preventDefault();
    window.open('mailto:alvimm.dev@gmail.com', '_blank');
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-cyan-700 opacity-[0.9]"
        >
          <SparklesIcon className="text-cyan-500 mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-bold">
            This is my Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-300">
              {' '}
              I&apos;m alvimm{' '}
            </span>
            a Full Stack Developer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          My name is Filipe Alvim, I&apos;m a Full Stack Developer student with experience in web, mobile and
          software development. Check out my projects and skills! If you prefer, contact me with one of the options below.
        </motion.p>
        <div className="flex space-x-4">
          {Socials.map((social) => (
            <motion.a variants={slideInFromLeft(1)} href={social.href} target="_blank" rel="noreferrer" key={social.name}
              className='py-1 px-2'>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={40}
                height={40}
              />
            </motion.a>
          ))}
          <motion.a onClick={handleMailTo} variants={slideInFromLeft(1)} target="_blank" rel="noreferrer"
            className='py-1 px-2 cursor-pointer'>
            <Image
              src='/mail.svg'
              alt='mail icon'
              width={40}
              height={40}
            />
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={600}
          width={600}
        />
      </motion.div>
    </motion.div >
  );
};

export default HeroContent;
