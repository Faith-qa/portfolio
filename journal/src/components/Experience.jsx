 import React from 'react'
 import html from "../assets/html.png"
 import nodejs from "../assets/node.png"
 import github from "../assets/github.png"
 import AWS from "../assets/aws-cloud.png"
 //import docker from "../assets/html.png"
 //import typescript from "../assets/html.png"
 import javascript from "../assets/javascript.png"
 //import googleCloud from "../assets/html.png"
 import reactImage from "../assets/react.png"
 import python from "../assets/Python.png"
 import mongoDB from "../assets/MongoDB_Logo.png"
 import mySQL from "../assets/mysql.png"
 //import git from "../assets/html.png"
 import travis from "../assets/travis.png"

 
 function Experience() {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: python,
            title: 'Python',
            style: 'shadow-orange-500'
            
        },
        {
            id: 3,
            src: nodejs,
            title: 'Nodejs',
            style: 'shadow-orange-500'
        },
        {
            id: 4,
            src: javascript ,
            title: 'JavaScript',
            style: 'shadow-orange-500'
        },
        {
            id: 5,
            src: AWS ,
            title: 'Amazon Web Services',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: github,
            title: 'GitHub',
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 8,
            src: mongoDB,
            title: 'mongoDB',
            style: 'shadow-orange-500'
        },
        {
            id: 9,
            src: mySQL,
            title: 'mySQL',
            style: 'shadow-orange-500'
        },
        {
            id: 10,
            src: travis,
            title: 'Travis CI',
            style: 'shadow-orange-500'
        }

    ]

    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black
        w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-centre w-full
            h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4
                    border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3
                gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        techs.map(({id, src, title, style}) => (
                            <div key={id} 
                            className={`shadow-md hover:scale-105, duration-500py-2 rounded-lg ${style}`}>
                        <img src={src} alt=" " className='w-10 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>

                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
    }
 
 export default Experience