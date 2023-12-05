import React from 'react'
import Layout from './Layout'
import Container from 'react-bootstrap/Container'
import './page.scss'
import { IconContext } from 'react-icons'
import { motion } from 'framer-motion'
import BackToTopButton from './BackToTopButton'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// LOGOS
import { DiBootstrap } from 'react-icons/di'
import { TbBrandBlender } from 'react-icons/tb'
import { SiAdobe } from 'react-icons/si'
import { SiAseprite } from 'react-icons/si'
import { DiHtml5 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io5'
import { DiDatabase } from 'react-icons/di'
import { DiCode } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { SiGodotengine } from 'react-icons/si'

export default function Skills() {
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
        })
    }

    return (
        <>
            <div className='skillPop pops'>
                <h4>Skills</h4>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }} exit={{ color: 'none' }}>
                <Layout />
                <Container className='skills'>
                    {/* Section 1 */}
                    <div className='header row'>
                        <h2 className='Border'>
                            <i>Skills</i>
                        </h2>
                        <p className='Border p-3'>
                            <span className='intro'>
                                I'm a Full Stack Developer with a robust skill set honed through immersive experiences. Let's dive into the
                                core of what I bring to the table:
                            </span>
                            <hr />
                            <span className='intro'>
                                Mastery in crafting captivating user interfaces defines my expertise. The seamless dance of HTML5,
                                JavaScript, jQuery, and CSS3 produces responsive designs, while Bootstrap and ReactJS enhance visual appeal
                                for engaging front-end experiences. Transitioning to the middle tier, I navigate C#, .NET Core MVC, LINQ,
                                EF, and Razor Pages, crafting dynamic web applications that seamlessly connect user interaction with
                                back-end functionality. Proficient in back-end realms, I manage databases using SQL and SQL Server.
                                Leveraging Axios, Azure Data Studio, and version control tools like Git, I ensure a streamlined and
                                efficient development process.
                            </span>
                            <hr />
                            <span>Creative Design Fusion:</span> Elevating full-stack development, I integrate artistic prowess using 3D
                            modeling and design software. From concept to implementation, tools like Blender and Adobe Creative Suite
                            breathe life into digital experiences.
                        </p>
                        <p className='Border p-3'>
                            <span className='intro'>
                                <h3>Creating This Website:</h3>
                            </span>
                            <br />
                            Harnessing the full spectrum of my web development skills acquired through coursework and independent research,
                            I crafted a dynamic application using cutting-edge 3D libraries like Three Fiber for React. Employing my
                            frontend expertise, I meticulously designed compelling, fully responsive pages adaptable to any device. To
                            infuse life into the interface, I integrated React Framer Motion for captivating animations and demonstrated API
                            requests using Axios. Throughout, I implemented various modules to add nuanced touches, ensuring a polished and
                            immersive experience in every corner of the application.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className='rows'>
                        {/* Front-End */}
                        <div className='row'>
                            <h1>Fullstack</h1>
                            <h4 className='Border'>
                                <a href='https://www.w3schools.com/html/html_intro.asp' target='_blank' rel='noreferrer'>
                                    HTML
                                    <DiHtml5 />
                                </a>
                            </h4>
                            <h4 className='Border'>
                                <a href='https://www.javascript.com/' target='_blank' rel='noreferrer'>
                                    JavaScript
                                    <IoLogoJavascript />
                                </a>
                            </h4>
                            <h4 className='Border'>
                                <a
                                    href='https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    SQL | SSMS
                                    <DiDatabase />
                                </a>
                            </h4>
                            <h4 className='Border'>
                                <a href='https://learn.microsoft.com/en-us/dotnet/csharp/' target='_blank' rel='noreferrer'>
                                    C#
                                    <DiCode />
                                </a>
                            </h4>
                            <h4 className='Border'>
                                <a href='https://react.dev/' target='_blank' rel='noreferrer'>
                                    React
                                    <FaReact />
                                </a>
                            </h4>
                            <h4 className='Border'>
                                <a href='https://getbootstrap.com/' target='_blank' rel='noreferrer'>
                                    Bootstrap
                                    <DiBootstrap />
                                </a>
                            </h4>
                        </div>
                        {/* Back-End */}
                        <div className='row'>
                            <h1>Creative Tools</h1>
                            <h4 className='Border'>
                                <a href='https://www.blender.org/' target='_blank' rel='noreferrer'>
                                    Blender
                                    <TbBrandBlender />
                                </a>
                            </h4>
                            <h4 className='Border'>
                                <a href='https://www.adobe.com/' target='_blank' rel='noreferrer'>
                                    Adobe
                                    <SiAdobe />
                                </a>
                            </h4>
                            <h4 className='Border'>
                                <a href='https://www.aseprite.org/' target='_blank' rel='noreferrer'>
                                    Aseprite
                                    <SiAseprite />
                                </a>
                            </h4>
                            <h4 className='Border'>
                                <a href='https://godotengine.org/' target='_blank' rel='noreferrer'>
                                    Godot
                                    <SiGodotengine />
                                </a>
                            </h4>
                        </div>
                        {/* Tools */}
                        {/* <div className='row'>
                            <h1>Badges</h1>
                            <h4 className='Border'>Badge 1</h4>
                            <h4 className='Border'>Badge 2</h4>
                            <h4 className='Border'>Badge 3</h4>
                            <h4 className='Border'>Badge 4</h4>
                            <h4 className='Border'>Badge 5</h4>
                        </div> */}
                    </div>
                    <div className='nextPage mt-5'>
                        <h1 className=' nexts2 Border' onClick={() => handleClick('/resume')}>
                            Next: Resume
                        </h1>
                    </div>
                </Container>
                <div className='BackTop mt-5'>
                    <btn className='Border' onClick={handleBackToTopClick}>
                        Back To Top
                    </btn>
                </div>
            </motion.div>
            <BackToTopButton />
            <Footer />
        </>
    )
}
