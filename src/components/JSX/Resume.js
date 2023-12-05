import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Layout from './Layout'
import BackToTopButton from './BackToTopButton'
import { motion } from 'framer-motion'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import resume from '../../assets/AidanMcQuillanResume(11-26-23).pdf'  

export default function Resume() {
    const navigate = useNavigate()
    const [active, setActive] = useState(true)

    const handleClick = (route) => {
        setActive(!active)
        // Navigate to the AboutMe component when the mesh is clicked
        navigate(route)
    }


    const handleBackToTopClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <>
            <div className='resumePop pops'>
                <h4>Resume</h4>
            </div>
            <Layout />
            <Container className='resume'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }} exit={{ color: 'none' }}>
                    {/* RESUME */}
                    <div>
                        {/* HEADER */}
                        <div className='heading'>
                            <h1>Aidan McQuillan</h1>
                            <h2>AidanMcQuillan917@gmail.com · STACK DEVELOPER</h2>
                            <h3>LinkedIn | GitHub</h3> {/* Links */}
                        </div>
                        <hr />
                        {/* SKILL LIST */}
                        <div className='skillList'>
                            <ul>
                                <li>.NET Core MVC framework</li>
                                <li>Full Stack Web Application Design</li>
                                <li>C# Fundamentals</li>
                                <li>JavaScript </li>
                                <br />
                                <li>Database Management</li>
                                <li>Unit Testing</li>
                                <li>Software Development Lifecycle</li>
                                <li>Agile Scrum Methodology</li>
                            </ul>
                        </div>
                        <hr />
                        {/* Technologies */}
                        <div className='tech'>
                            <h2>TECHNICAL AND PROFESSIONAL SKILLS</h2>
                            <ul>
                                <li>
                                    <span>Front End:</span> HTML5, JavaScript, jQuery, jQueryUI, CSS3, Responsive/Mobile Web Development,
                                    Bootstrap, ReactJS
                                </li>
                                <li>
                                    <span>Middle Tier:</span> C#, .NET Core MVC, LINQ, EF, Razor Pages
                                </li>
                                <li>
                                    <span>Back End:</span> SQL, SQL Server, Axios Tools: Azure Data Studio, Visual Studio, Visual Studio
                                    Code, SSMS, Git Bash
                                </li>
                                <li>
                                    <span>Creative Tools:</span> Adobe Creative Suite, Blender, Aseprite, Handbrake, FLstudio
                                </li>
                                <li>
                                    <span>Professional Skills:</span> Troubleshooting, Critical Thinking, Communication, Project Management
                                    Fundamentals, Teamwork, Pair Programming, Visual Studio, Visual Studio Code, SSMS, Git Bash, Creativity
                                </li>
                            </ul>
                        </div>
                        {/* Projects */}
                        <hr />
                        <div className='projects'>
                            <h2>INDEPENDENT DEVELOPMENT PROJECTS</h2>
                            <ul>
                                <li>
                                    <span>Personal Site:</span> Leveraging ReactJS, HTML, CSS, and incorporating 3D models, I meticulously
                                    crafted my personal website. This dynamic space not only exhibits my full-stack portfolio with finesse
                                    but also offers a vibrant and immersive glimpse into my identity as a developer, infusing flair into my
                                    digital presence.
                                </li>
                                <li>
                                    <span>Storefront - AirAidans:</span> Architected a secure MVC .NET Core application for managing product
                                    data within the realm of a virtual shoe store named AirAidans. Employing an active database and MVC
                                    architecture, the application provides a seamless shopping experience. Users can explore a diverse
                                    product range, securely add items to their session-based locker, and enjoy authentication and login
                                    features for a personalized and secure shopping journey.
                                </li>
                                <li>
                                    <span>Web API | To-Do List:</span> Demonstrating proficiency in full-stack development, I created a
                                    robust Web API integrated with a To-Do list using ReactJS. This project showcases my ability to manage
                                    APIs and databases, with the added functionality of Swagger for enhanced API documentation. The result
                                    is a fully functional web application that highlights my expertise in creating and maintaining APIs
                                    while ensuring a smooth user experience.
                                </li>
                            </ul>
                        </div>
                        <hr />
                        {/* Training */}
                        <div className='training'>
                            <h2>TECHNICAL TRAINING</h2>
                            <h3 className='mini'>
                                Full Stack Coding Program, Centriq Training <span>Anticipated Graduation:</span>
                            </h3>
                            <h3>
                                Kansas City, MO <span>December 2023</span>
                            </h3>
                            <ul>
                                <li>Troubleshooting & Debugging</li>
                                <li>Source Control</li>
                                <li>Agile / Scrum</li>
                                <br />
                                <li>Website Deployment</li>
                                <li>Pair Programming</li>
                                <li>Code Review</li>
                            </ul>
                        </div>
                        <hr />
                        <div className='download'>
                            <a href={resume} 
                            download='Aidan McQuillan Resume'
                             target='_blank' 
                             rel='noreferrer'>
                                Download It Here!
                            </a>
                        </div>
                    </div>
                    <div className='nextPage mt-5'>
                        <h1 className=' nexts5 Border' onClick={() => handleClick('/portfolio')}>
                            Next: Portfolio
                        </h1>
                    </div>

                    <div className='BackTop mt-5'>
                        <h1 className=' nexts5 ' onClick={handleBackToTopClick}>
                            Back To Top
                        </h1>
                    </div>
                </motion.div>
                <BackToTopButton />
            </Container>
            <Footer />
        </>
    )
}
