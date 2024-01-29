'use client'
import { useRef, useEffect, useState, SetStateAction } from 'react';
import { Collapse } from 'flowbite';
import Image from 'next/image';

const NavBar = () => {
  const targetRef = useRef(null);
  const triggerRef = useRef(null);
  const [collapse, setCollapse] = useState<Collapse | null>(null);
  const [selectedLink, setSelectedLink] = useState("#home");

  useEffect(() => {
    if (targetRef.current && triggerRef.current) {
      const collapseInstance = new Collapse(
        targetRef.current,
        triggerRef.current,
        {
        },
        {
          id: 'targetEl',
          override: true
        }
      );
      setCollapse(collapseInstance);
    }
  }, []);

  const handleClick = (link: SetStateAction<string>) => {
    if (collapse) {
      const collapseInstance = collapse as Collapse;
      collapseInstance.collapse();
    }
    setSelectedLink(link);
  };
  return (
    <nav className="w-full h-[75px] fixed top-0 shadow-lg shadow-cyan-900/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/NavLogo.png"
            width={130}
            height={130}
            alt="logo"
            className="cursor-pointer"
          />
        </a>
        <button ref={triggerRef} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div ref={targetRef} className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#030014] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent ">
            <li>
              <a onClick={() => handleClick("#home")} href="#home" className={`block py-2 px-3 rounded hover:bg-cyan-900 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 text-lg ${selectedLink === "#home" ? "text-cyan-300" : "text-white"}`} aria-current="page">Home</a>
            </li>
            <li>
              <a onClick={() => handleClick("#skills")} href="#skills" className={`block py-2 px-3 rounded hover:bg-cyan-900 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 text-lg ${selectedLink === "#skills" ? "text-cyan-300" : "text-white"}`}>Skills</a>
            </li>
            <li>
              <a onClick={() => handleClick("#projects")} href="#projects" className={`block py-2 px-3 rounded hover:bg-cyan-900 md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 text-lg ${selectedLink === "#projects" ? "text-cyan-300" : "text-white"}`}>Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar