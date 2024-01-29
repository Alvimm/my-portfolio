import HeroContent from "../sub/HeroContent"

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="home">
      <video autoPlay muted loop className="rotate-180 absolute md:top-[-340px] top-[-390px] left-0 z-[-2] w-full h-full object-cover">
        <source src="/blackhole.webm" type="video/webm"/>
      </video>
      <HeroContent />
    </div>
  )
}

export default Hero