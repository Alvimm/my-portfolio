import Image from "next/image";


interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border cursor-pointer transform transition-transform duration-500 hover:scale-105'>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={title} width={1000} height={1000} className="w-full object-contain" />
        <div className='relative p-4'>
          <h1 className='text-2xl font-semibold text-white'>{title}</h1>
          <p className='mt-2 text-gray-300'>{description}</p>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard
