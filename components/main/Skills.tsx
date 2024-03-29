import {First_line_skills, Second_line_skills, Third_line_skills, Fourth_line_skills, Fifth_line_skills } from '@/constants';
import SkillDataProvider from '../sub/SkillDataProvider';
import SkillText from '../sub/SkillText';

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: 'scale(0.9)' }}
    >
      <SkillText />
      <div className="sm:flex sm:flex-row sm:justify-around sm:flex-wrap mt-4 gap-5 items-center grid grid-cols-4">
        {First_line_skills.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="sm:flex sm:flex-row sm:justify-around sm:flex-wrap mt-4 gap-5 items-center grid grid-cols-3">
        {Second_line_skills.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="sm:flex sm:flex-row sm:justify-around sm:flex-wrap mt-4 gap-5 items-center grid grid-cols-3">
        {Third_line_skills.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="sm:flex sm:flex-row sm:justify-around sm:flex-wrap mt-4 gap-5 items-center grid grid-cols-2">
        {Fourth_line_skills.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="sm:flex sm:flex-row sm:justify-around sm:flex-wrap mt-4 gap-5 items-center ">
        {Fifth_line_skills.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
          <video src="/cards-video.webm" className='w-full h-auto' preload='false' playsInline loop muted autoPlay/>
        </div>
      </div>
    </section>
  );
};

export default Skills;
