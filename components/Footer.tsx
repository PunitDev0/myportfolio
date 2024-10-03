import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 ' id ="contact">
     <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img 
        src="/footer-grid.svg" 
        alt="grid" 
        className='w-full h-full opacity-50'
        />
     </div>
     <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-x-[45vw]'>
            Ready to take  <span className='text-purple'>your</span> digital presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
            Reach out to me today let&apos;s discuss how i can help you achive your goals.
        </p>
        <a href="https://www.linkedin.com/in/punitdev0/">
            <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position='right'
            />
        </a>
     </div>
    </footer>
  )
}

export default Footer
