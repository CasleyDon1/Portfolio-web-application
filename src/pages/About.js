import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ProfilePic from '../../public/images/profile/developer-pic-2.png';
import { motion, useInView, useMotionValue, useSpring, useEffect, useRef } from 'framer-motion'
import Skills from '@/components/Skills';
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const About = () => {
  return (
    <>
    <Head>
        <title>Nkosinathi Tolom | About Page</title>
        <meta name="description" content="about me page" />
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        <div className='grid w-full grid-cols-8 gap-16 sm-gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                <p className='my-4 font-medium'>
                - Hi, I'm Nkostinathi Tolom, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                  and user-centered digital experiences. With over 1 years of experience in the field. I am always looking for 
                  new and innovative ways to bring ideas to life.
                </p>
                <p className='my-4 font-medium'>
                - I believe that design is about more than just making things look pretty – it's about solving problems and 
                  creating intuitive, enjoyable experiences for users.
                </p>
                <p className='my-4 font-medium'>
                - Whether I'm working on a website, mobile app, or 
                  other digital product, I bring my commitment to design excellence and user-centered thinking to 
                  every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.

                </p>
            </div>
            <div className='col-span-3 reletive h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8
            '>  
                <Image src={ProfilePic} alt="NKosinathi Tolom" className='w-full h-auto rounded-2xl pt-0'
                   priority
                   sizes="(max-width: 768px) 100vw,
                   (max-width: 1200ox) 50vw,
                   33vw"
                 />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        1
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75
                      xl:text-center md:text-lg sm:text-base xs:text-sm 
                    '>Satisfied Clients</h2>
                </div>
                <div className='flex flex-col items-end justify-center  xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        5+
                    </span>
                    <h2 lassName='text-xl font-medium capitalize text-dark/75
                     xl:text-center md:text-lg sm:text-base xs:text-sm
                    '>Projects completed</h2>
                </div>
                <div className='flex flex-col items-end justify-center  xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        1+
                    </span>
                    <h2 lassName='text-xl font-medium capitalize text-dark/75
                     xl:text-center md:text-lg sm:text-base xs:text-sm
                    '>Years of experience</h2>
                </div>
            </div>
        </div>
        <Skills />
        <Experience />
        <Education />
        </Layout>
    </main>
    </>
  )
}

export default About