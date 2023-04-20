import React, { useRef } from 'react'
import {motion ,useScroll } from 'framer-motion';

const Details = ({position, company, companyLink, time, address, work}) => {
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <div>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target="_blank"
            className='text-primary capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </div>

    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top
            md:w-[2px] md:left-[30px] xs:left-[20px]
            ' 
             />
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
              <Details 
              position="Software Engineer" company="Google"
              companyLink="www.google.com"
              time="2022-Present"  address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
              search engine, including improving the accuracy and relevance of search results and 
              developing new tools for data analysis and visualization."
              
              />
                <Details 
              position="Software Engineer" company="Google"
              companyLink="www.google.com"
              time="2022-Present"  address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
              search engine, including improving the accuracy and relevance of search results and 
              developing new tools for data analysis and visualization."
              
              />
                <Details 
              position="Software Engineer" company="Google"
              companyLink="www.google.com"
              time="2022-Present"  address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
              search engine, including improving the accuracy and relevance of search results and 
              developing new tools for data analysis and visualization."
              
              />
                <Details 
              position="Software Engineer" company="Google"
              companyLink="www.google.com"
              time="2022-Present"  address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
              search engine, including improving the accuracy and relevance of search results and 
              developing new tools for data analysis and visualization."
              
              />
            </ul>
        </div>
    </div>
  )
}

export default Experience