import React from 'react'
import Container from 'react-bootstrap/Container'
import Layout from './Layout'
import BackToTopButton from './BackToTopButton'
import { motion } from 'framer-motion'

export default function Resume() {
    return (
        <>
        <div className='resumePop pops'>
                <h4>Resume</h4>
            </div>
            <Layout />
            <Container className='resume'>
            <motion.div
                    initial={{ opacity: 0,}}
                    animate={{ opacity: 1, transition: { duration: 3 }}}
                    exit={{ color: 'none' }}
                >
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
                                    <span>Back End:</span> SQL, SQL Server, Axios Tools: Azure Data Studio, Visual Studio, Visual Studio Code,
                                    SSMS, Git Bash
                                </li>
                                <li>
                                    <span>Professional Skills:</span> Troubleshooting, Critical Thinking, Communication, Project Management
                                    Fundamentals, Teamwork, Pair Programming, Creativity.
                                </li>
                            </ul>
                        </div>
                        {/* Projects */}
                        <hr />
                        <div className='projects'>
                            <h2>INDEPENDENT DEVELOPMENT PROJECTS</h2>
                            <ul>
                                <li>
                                    <span>Personal Site:</span> Through the fusion of HTML, CSS, and JavaScript, I artfully constructed a
                                    personal webpage. This space not only showcases my full stack portfolio with finesse but also paints a vivid
                                    picture of my identity and capabilities.
                                </li>
                                <li>
                                    <span>Storefront</span> Created a secure application for managing product data. Application is built to
                                    simulate an online store front with a shopping cart. Administrators can manage product, category and vendor
                                    data.
                                </li>
                                <li>
                                    <span>Web API:</span> I introduced an exciting twist by allowing players to embody a fearsome beast in the
                                    console dungeon game I developed with C#, Block Beasts. I use fundamental C# skills to deliver an exciting
                                    console app experience.
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
                        <div className='download'>
                            <a href='~/assets/img/AidanMcQuillanResume(8-18-23).pdf' target='_blank'>
                                Download It Here!
                            </a>
                        </div>
                    </div>
                    <div className='nextPage'>
                        <a href='/portfolio' className='Border'>
                            Next: Portfolio
                        </a>
                    </div>
                </motion.div>
                <BackToTopButton/>
            </Container>
        </>
    )
}
