import React from 'react'
import Layout from './Layout'
import HeroShot from '../../assets/HeroShot.jpg'

import './page.scss'
import Container from 'react-bootstrap/Container'

export default function AboutMe() {
    return (
        <>
            <Layout />
            <Container className='about'>
                <div>
                    {/* Shared Layout Component */}

                    {/* Heading*/}
                    <div className='header'>
                        <h2 className='Border'><i>About Me</i></h2>
                        <p className='Border'>
                            I specalize in web development and programming. From captivating websites to a myriad of software applications,
                            my skills in HTML, CSS, JavaScript, and C# know no bounds. Innovative and dynamic, I aim at turning every
                            project into a resounding success.
                        </p>
                    </div>

                    {/* Main Section */}
                    <div class='row pt-5 con'>
                        <div class='col-lg-4'>
                            <img src={HeroShot} class='img-fluid img-size img-shadow Border' alt='' />
                        </div>
                        <div class='col-lg-8 pt-4 pt-lg-0 content'>
                            <h3><i>Web Developer &amp; Programmer</i></h3>
                            <br />
                            <p class='fst-italic'>
                                - I'm proficient in HTML, CSS, JavaScript, and C#. I create captivating websites and innovative software
                                applications. -
                            </p>
                            <br />
                            <hr />
                            <div class='row'>
                                <div class='col-lg-6'>
                                    <ul>
                                        <li>
                                            <i class='bi bi-chevron-right'></i> <strong>Website:</strong>{' '}
                                            <a href='http://www.aidanmcquillan.com/'>
                                                <p2>aidanmcquillan.com</p2>
                                            </a>
                                        </li>
                                        <li>
                                            <i class='bi bi-chevron-right'></i> <strong>City:</strong> <span>Clarkston, Michigan</span>
                                        </li>
                                        <li>
                                            <i class='bi bi-chevron-right'></i> <strong>Email:</strong>{' '}
                                            <span>AidanMcQuillan917@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <p>
                                As a skilled web developer and programmer proficient in HTML, CSS, JavaScript, and C#, I bring a range of
                                expertise in crafting captivating websites and innovative software applications. Eager to contribute my
                                talents and collaborate with a team, I'm dedicated to delivering exceptional solutions that make a
                                meaningful impact on everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
