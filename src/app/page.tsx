'use client'
import Image from 'next/image'
import { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaReact, FaAngular, FaPython, FaJava, FaHtml5, FaCss3, FaGitAlt, FaSquareGithub, FaBootstrap, FaNodeJs, FaDocker, FaLinux } from 'react-icons/fa6'
import { SiJavascript, SiTypescript, SiCplusplus, SiMysql, SiTailwindcss, SiFlask, SiFirebase, SiAmazonaws, SiPandas, SiPytorch } from 'react-icons/si'
import { BiLogoGoogleCloud } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import nooodlesoup from '../../public/nooodle-soup.jpeg'
import { projectsData } from './data/projects'
import aboutFace from '../../public/about-face.jpeg'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""} >
      <main className='bg-white font-default 
      dark:bg-slate dark:text-white'>
        <div className='fixed w-screen top-0 z-50 bg-white text-xl
        sm:text-2xl 
        dark:bg-slate'>
          <nav className='px-10 pt-10 mb-8 font-default flex justify-between items-center'>
            <h1 className='font-name'>
              <a href='#'>
                VINEET
              </a>
            </h1>
            <ul className='flex items-center'>
              <li className='mr-5 text-rose-of-sharon-950
              dark:text-rose-of-sharon-100'>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer' />
              </li>
              {/*
            <li className='text-rose-of-sharon-800 text-2xl'>
              <a>
                <GiHamburgerMenu className='cursor-pointer' />
              </a>
            </li>
            */}
            </ul>
          </nav>
        </div>
        <div className='px-10 text-center 
        sm:px-20 
        md:px-36
        lg:px-52 
        xl:px-80
        2xl:px-96'>
          <section id='home' className='h-screen flex flex-col justify-center items-center
          sm:pt-56
          md:pt-40'>
            <div className='relative h-56 w-56 mx-auto rounded-full shadow-lg
            sm:h-72 sm:w-72
            md:h-80 md:w-80
            dark:shadow-rose-of-sharon-600'>
              <Image className='rounded-full' src={nooodlesoup} alt='Nooodle Soup' />
            </div>
            <div className='text-center mt-10
            sm:mt-20'>
              <p className='text-lg
              sm:text-xl
              dark:text-gray-400'>
                Hi there! I&apos;m
              </p>
              <p className='font-name text-7xl tracking-wider text-rose-of-sharon-700 py-2
              sm:text-8xl sm:py-4
              dark:text-rose-of-sharon-500'>
                VINEET
              </p>
              <p className='text-xl py-2 text-rose-of-sharon-950
              sm:text-2xl sm:py-0
              dark:text-rose-of-sharon-50'>
                Digital Craftsman
              </p>
              <p className='text-sm py-5 leading-8 text-gray-700
              sm:text-lg sm:text-gray-500 sm:py-8 sm:px-10 sm:leading-9
              dark:text-gray-300'>
                I am a passionate software developer tackling real-world problems one line of code at a time.
              </p>
            </div>
            <div className='text-4xl text-rose-of-sharon-950 
            flex justify-center items-center 
            gap-6 py-3
            dark:text-rose-of-sharon-50'>
              <a href='https://github.com/nooodle-soup' target='_blank'><AiFillGithub /></a>
              <a href='https://www.linkedin.com/in/vineet-pratik-agarwal/' target='_blank'><AiFillLinkedin /></a>
            </div>
          </section>
          <section id='tools_and_tech' className='py-10
          sm:mt-0 '>
            <p className='p-2 font-name underline underline-offset-4 uppercase tracking-wider
            sm:text-xl
            lg:text-2xl'>
              What&apos;s in my Toolbox?
            </p>
            <p className='text-sm p-3 leading-8 text-gray-600
            sm:text-lg sm:px-10 sm:py-10 sm:leading-9
            dark:text-gray-300'>
              Throughtout my journey in Computer Science, I haved picked up a lot of tools
              and technologies to add to my arsenal.
            </p>
            <div className='grid grid-cols-4 gap-4 gap-y-6 
            text-rose-of-sharon-900 text-center text-2xl
            border-2 border-rose-of-sharon-950 rounded-lg 
            mt-7 p-5
            sm:gap-8 sm:gap-y-10 sm:text-4xl sm:p-10
            md:text-5xl
            lg:grid-cols-6 lg:text-5xl lg:gap-10 lg:gap-y-12
            dark:text-rose-of-sharon-50 dark:border-rose-of-sharon-500'>
              <div className='flex justify-center'>
                <FaPython />
              </div>
              <div className='flex justify-center'>
                <FaJava />
              </div>
              <div className='flex justify-center'>
                <FaHtml5 />
              </div>
              <div className='flex justify-center'>
                <FaCss3 />
              </div>
              <div className='flex justify-center'>
                <SiJavascript />
              </div>
              <div className='flex justify-center'>
                <SiTypescript />
              </div>
              <div className='flex justify-center'>
                <SiCplusplus />
              </div>
              <div className='flex justify-center'>
                <SiMysql />
              </div>
              <div className='flex justify-center'>
                <TbBrandNextjs />
              </div>
              <div className='flex justify-center'>
                <FaReact />
              </div>
              <div className='flex justify-center'>
                <FaAngular />
              </div>
              <div className='flex justify-center'>
                <FaNodeJs />
              </div>
              <div className='flex justify-center'>
                <FaBootstrap />
              </div>
              <div className='flex justify-center'>
                <SiTailwindcss />
              </div>
              <div className='flex justify-center'>
                <SiFlask />
              </div>
              <div className='flex justify-center'>
                <FaDocker />
              </div>
              <div className='flex justify-center'>
                <FaLinux />
              </div>
              <div className='flex justify-center'>
                <SiFirebase />
              </div>
              <div className='flex justify-center'>
                <SiAmazonaws />
              </div>
              <div className='flex justify-center'>
                <BiLogoGoogleCloud />
              </div>
              <div className='flex justify-center'>
                <FaGitAlt />
              </div>
              <div className='flex justify-center'>
                <FaSquareGithub />
              </div>
              <div className='flex justify-center'>
                <SiPandas />
              </div>
              <div className='flex justify-center'>
                <SiPytorch />
              </div>
            </div>

          </section>
          <section id='portfolio' className='pt-20'>
            <p className='py-2 font-name underline underline-offset-4 uppercase tracking-wider
            sm:text-xl
            lg:text-2xl'>
              Portfolio
            </p>
            <p className='text-sm py-3 leading-8 text-gray-600
            sm:text-lg sm:px-5 sm:py-10 sm:leading-9
            dark:text-gray-300'>
              Dive into my world of software alchemy. Here&apos;s a curated selection
              of my projects where I transform lines of code into real-world magic.
            </p>
            {projectsData.map((project) => (
            <div key={project.key} className='shadow-xl rounded-lg 
            flex items-center justify-center 
            my-4 p-2'>
              <article className='flex-col
              2xl:flex-row'>
                <div style={{ position: 'relative' }}
                  className='border-t-2 border-x-2 border-rose-of-sharon-950 rounded-t-md 
                  bg-black flex-1 h-64 overflow-hidden
                  sm:h-80
                  dark:border-rose-of-sharon-500'>
                  <Image src={project.src} alt={project.alt} fill={true} style={{ objectFit: "cover" }} />
                </div>
                <div className='flex-col 
                border-b-2 border-x-2 border-t rounded-b-md border-rose-of-sharon-950 
                flex-1 h-64
                sm:h-52
                md:px-8 md:h-56
                dark:border-rose-of-sharon-500 dark:border-t-0'>
                  <div className='h-20 flex justify-center items-center
                  font-name uppercase text-lg pt-4 
                  sm:h-16 sm:text-xl
                  lg:text-2xl'>
                    <p>
                      {project.title}
                    </p>
                  </div>
                  <p className='text-sm leading-5 h-28 p-2
                  sm:h-min
                  lg:text-lg lg:leading-6 lg:text-gray-600
                  dark:text-gray-300'>
                    {project.description} 
                  </p>
                  <div className='font-name flex justify-evenly pt-2
                  sm:pt-3
                  lg:text-lg'>
                    {project.href.map((link, index) => (
                    <a key={index} className='px-4 py-2 rounded-md 
                    bg-gradient-to-tr from-rose-of-sharon-300 to-rose-of-sharon-600
                    dark:from-rose-of-sharon-600 dark:to-rose-of-sharon-900'
                      href={link.url}
                      target='_blank'>
                      {link.label}
                    </a>
                    ))}
                  </div>
                </div>
              </article>
            </div>
            ))}
          </section>
          <section id='about' className='h-max pt-36 pb-8'>
            <p className='py-2 font-name underline underline-offset-4 uppercase tracking-wider
            sm:text-xl
            lg:text-2xl'>
              About
            </p>
            <div className='bg-black relative h-56 w-56 my-8 mx-auto rounded-full shadow-lg
            sm:h-72 sm:w-72
            dark:shadow-rose-of-sharon-600'>
              <Image className='border border-black text-md rounded-full' src={aboutFace} alt='Nooodle Soup' />
            </div>
            <div className='text-left mt-5 text-sm leading-8 text-gray-700
            sm:text-lg sm:leading-9
            md:text-center
            dark:text-gray-300'>
              <p className='py-5
              sm:py-2'>
                My name is Vineet Agarwal. My work combines Data Science and
                Web Technology to create functional, reliable and beautiful websites and visualizations.
              </p>
              <p className='py-5
              sm:py-2'>
                The first bit of code I wrote was a mockup of Iron-Man’s J.A.R.V.I.S. way back in 2014. It didn’t
                do much - just wished Good Morning when prompted but that’s where it all started!
              </p>
              <p className='py-5
              sm:py-2'>
                I ventured into Data Science and started enjoying it. But I also felt that this did not satisfy my
                creative mind. This made me dive into visualization principles to understand how to make my line graphs prettier (I’m dead serious...). My journey took  me somewhat further down the rabbit hole than I had intended and though I dirtied my fluffy white tail, I emerged enlightened (Yes, I am a Sherlock fan). Thereafter, I started learning about Web Technology and having been working to create visually appealing websites and visualizations.
              </p>
            </div>
            <div className='text-4xl 
            text-rose-of-sharon-950 
            flex justify-center items-center 
            gap-6 py-3
            dark:text-rose-of-sharon-50'>
              <a href='https://github.com/nooodle-soup' target='_blank'><AiFillGithub /></a>
              <a href='https://www.linkedin.com/in/vineet-pratik-agarwal/' target='_blank'><AiFillLinkedin /></a>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
