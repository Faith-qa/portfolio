import React from 'react'
import heroImage from '../assets/Faith2.jpeg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name="home" 
    className='h-screen w-full bg-gradient-to-w via-black from-black
    to-white-800'>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row overflow-hidden '>
        <div className="flex flex-col justify-center h-full">
          
          
          <p className='text-gray-500 py-4 max-w-md align-justify'> 
          Hi, my name is <strong>Faith Okoth</strong>.<br/> I am a software engineer passionate about using technology to build scalable and impactful business and social solutions.
          I’m skilled in <strong>AWS cloud, nodejs, expressJs, python, javascript, MongoDB, </strong> and <strong>reactjs</strong>
          I currently work as a Technical Mentor Specialist at the <a href='https://algroup.org/'> African Leadership Group</a> and freelance as a cloud developer in my free time.


          </p>
          <div>
            <Link to="projects" smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
            bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
            Projects
            <span className='group-hover:rotate-90 duration-300'>
              <MdOutlineKeyboardArrowRight size={25} 
              className='ml-1'/>
            </span>
          </Link>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="my profile"
          className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
        

      </div>
    </div>
  )
}

export default Home