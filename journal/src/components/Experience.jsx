import React from 'react';
import "../styles/experience.css";
function Experience()  {
    return (
        <div name="experience" class="container py-5">

        <div class="row">
            <div class="col-lg-8 mx-auto">
                
                
                <ul class="timeline">
                    <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Cloud Developer [Freelance] <a href="https://beatific.co/" target="https://beatific.co/">Beatific</a></h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>August 2022 - Present</span>
                        <ul class="text-small mt-2 font-weight-light">
                        <li>Built the backend server of the beatific chrome extension using express js</li>
                            
                        <li>Led and managed the deployment of beatific chrome extension to aws elastic beanstalk</li>
                        <li>configured an end to end termination of the beatific extension on https </li>
                        </ul>
                    </li>
                    <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Technical Mentor: Specialist - African Leadership Group- <a href="https://algroup.org/" target="https://algroup.org/">African Leadership Group</a></h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>October 2021 - Present</span>
                        <ul class="text-small mt-2 font-weight-light">
                        <li>Facilitated and delivered 100+ hours of live coding sessions to 20000+ participants on python, C, nodejs programming language</li>
                        <li>Designed the mentor-student working cadence that improved the program retention rate by 80%</li>
                        <li>Created an end-to-end playbook of the ALX software engineering program defining key systems and processes to ensure efficient program delivery and implementation.</li>
                        </ul>
                    </li>
                    <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Technical Associate - Community Support - <a href="https://algroup.org/" target="https://algroup.org/">African Leadership Group</a></h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>January -October 2021</span>
                        <ul class="text-small mt-2 font-weight-light">
                            <li>Built and run a community of 3000 members with 80% active and engaging</li>
                            <li>Managed 2 Linux servers with +15 website hosted using LAMP and LEMP stack</li>
                            <li>Designed an inventory management system for ALA art department using Django, and deployed on AWS. This improved the
                                student experience of borrowing items, and made it easier for the department to track the stock and the quality of items.</li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    </div>
       
    )

}
export default Experience