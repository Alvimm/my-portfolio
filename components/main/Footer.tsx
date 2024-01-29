"use client"
import Image from 'next/image';

const Footer = ()  => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer text-white py-4">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap justify-center sm:justify-between items-center mx-10">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0 flex justify-center sm:justify-start">
            <a
              href="#home"
              className="h-auto w-auto flex flex-row items-center"
            >
              <Image
                src="/NavLogo.png"
                width={130}
                height={130}
                alt="logo"
                className="cursor-pointer hover:animate-slowspin"
              />
            </a>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <p>
              Copyright &copy; <span className="year">{currentYear}</span> by alvimm. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer