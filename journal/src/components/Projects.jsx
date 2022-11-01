import React, {useState} from 'react'
import monolithtomicroservices from "../assets/portfolio/microservices.png"
import chromeextension from "../assets/portfolio/chromeExtension.png"
import aws_Serverless_TodoApp from "../assets/portfolio/serverlesstodo.png"
import airbnbclon from "../assets/portfolio/arrayDestruct.jpg"
import admindash from "../assets/portfolio/arrayDestruct.jpg"
import test from "../assets/videos/extension.mp4"



const Projects = () => {
    const [popup, setPopup] = useState(false);

    const projects = [
        {
            id:1,
            src: monolithtomicroservices,
            code: 'https://github.com/Faith-qa/Faith-monolith-to-microservices-project',
            demo: ''
        },
        {
            id:2,
            src: chromeextension,
            code: 'https://github.com/Faith-qa/happyDay-extension/tree/master/happiness-tracker-extension',
            demo: test
        },
        {
            id:3,
            src: aws_Serverless_TodoApp,
            code: 'https://github.com/Faith-qa/ALX-Cloud-Developer/tree/master/aws-serverless-Todoapp',
            demo: ''
        },
        
    ]

    
    return (
        <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>checkout some of my work right here</p>
                </div>
                
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    projects.map(({id, src, code, demo}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt=""
                        className='rounded-md duration-200  hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href={code}>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </a>
                            <a href={demo}>
                            <button 
                            className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' 
                            type="button">Demo</button>
                                

                            </a>

                            

                            
                        </div>
                    </div>
                        

                    ))
                }
                    
                </div>
            </div>
        </div>
    )
}

export default Projects