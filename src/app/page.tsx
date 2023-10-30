'use client'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import nooodlesoup from '../public/nooodle-soup.jpeg'
import { projectsData } from './data/projects'
import { aboutData } from './data/about'
import { IconTooltip } from '@/components/icon-with-tooltip'
import { toolkitData } from './data/toolkit'

export default function Home() {
  return (
    <div>
      <main className='font-default'>
        <div className='px-10 text-center 
        sm:px-20 
        md:px-36
        lg:px-52 
        xl:px-80
        2xl:px-[32rem]'>
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
              dark:text-rose-of-sharon-600'>
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
              {toolkitData.map((icon, index) => (
                <div key={index} className='flex justify-center'>
                  <IconTooltip icon={icon.src} iconTooltip={icon.alt} />
                </div>
              ))}
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
              {aboutData.heading}
            </p>
            <div className='bg-black relative h-56 w-56 my-8 mx-auto rounded-full shadow-lg
            sm:h-72 sm:w-72
            dark:shadow-rose-of-sharon-600'>
              <Image className='border border-black text-md rounded-full' src={aboutData.img.src} alt={aboutData.img.alt} />
            </div>
            <div className='text-left mt-5 text-sm leading-8 text-gray-700
            sm:text-lg sm:leading-9
            md:text-center
            dark:text-gray-300'>
              {aboutData.content.map((paragraph, index) => (
                <p key={index} className='py-5
              sm:py-2'>
                  {paragraph}
                </p>
              ))}
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
