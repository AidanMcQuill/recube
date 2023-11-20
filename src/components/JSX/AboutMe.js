import React from 'react'
import Layout from './Layout'
import HeroShot from '../../assets/HeroShot.jpg'

import './page.scss'
import Container from 'react-bootstrap/Container'
import { motion } from 'framer-motion'

export default function AboutMe() {
    return (
        <>
            <div className='aboutPop'>
                <h4>About Me</h4>
            </div>
            <Layout />
            <Container className='about'>
                <motion.div
                    initial={{ opacity: 0,}}
                    animate={{ opacity: 1, transition: { duration: 3 }}}
                    exit={{ color: 'none' }}
                >
                    {/* Shared Layout Component */}

                    {/* Heading*/}
                    <div className='header row'>
                        <h2 className='Border'>
                            <i>About Me</i>
                        </h2>
                        <p className='Border'>
                            As a skilled web developer and programmer proficient in HTML, CSS, JavaScript, and C#, I bring a range of
                            expertise in crafting captivating websites and innovative software applications. Eager to contribute my talents
                            and collaborate with a team, I'm dedicated to delivering exceptional solutions that make a meaningful impact on
                            everyone.
                        </p>
                    </div>

                    {/* Main Section */}
                    <div class='row pt-5 con'>
                        <div class='col-lg-4'>
                            <img src={HeroShot} class='img-fluid img-size img-shadow Border' alt='' />
                            <ul>
                                <li>
                                    <i class='bi bi-chevron-right'></i> <strong>LinkedIn:</strong>{' '}
                                    <a href='http://www.aidanmcquillan.com/'>
                                        <p2>aidanmcquillan.com</p2>
                                    </a>
                                </li>
                                <li>
                                    <i class='bi bi-chevron-right'></i> <strong>City:</strong> <span>Clarkston, Michigan</span>
                                </li>
                                <li>
                                    <i class='bi bi-chevron-right'></i> <strong>Email:</strong> <span>AidanMcQuillan917@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                        {/* RIGHT SIDE */}
                        <div class='col-lg-8 pt-4 pt-lg-0 content'>
                            <h3>
                                <i>Web Developer &amp; Programmer</i>
                            </h3>

                            <br />
                            {/* <p class='fst-italic quote Border'>
                                - I'm proficient in HTML, CSS, JavaScript, and C#. I create captivating websites and innovative software
                                applications. -
                            </p> */}
                            <br />

                            <p className='Border sum'>
                                Hello, I'm Aidan McQuillan, a Michigan-based web developer about to graduate from Centriq's Full Stack Web
                                Development bootcamp. I've immersed myself in the .NET Core MVC framework, C#, and the art of full-stack web
                                application design.
                                <br /> <br /> What sets me apart? I'm not just a coder; I'm a creative mind passionate about transforming
                                ideas into unique web experiences. Proficient in HTML, CSS, and JavaScript, I thrive on crafting captivating
                                websites and innovative software applications.
                                <br /> <br /> My journey has equipped me with skills in database management, unit testing, and a deep
                                understanding of the Software Development Lifecycle and Agile Scrum Methodology. Eager to contribute my
                                flair for creativity and collaborate on projects that make a lasting impact, I'm excited to bring your ideas
                                to life through exceptional digital solutions.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </>
    )
}
