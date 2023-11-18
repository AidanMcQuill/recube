import React from 'react'
import Layout from './Layout'
import HeroShot from '../../assets/HeroShot.jpg'

import './page.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function AboutMe() {
    return (
        <>
            <Layout />

            <Container className='container'>
                {/* Shared Layout Component */}

                {/* Section 1  */}
                <div className='Border item1'>
                    <h2>About Me</h2>
                    <p>
                        I specalize in web development and programming. From captivating websites to a myriad of software applications, my
                        skills in HTML, CSS, JavaScript, and C# know no bounds. Innovative and dynamic, I aim at turning every project into
                        a resounding success.
                    </p>
                </div>

                {/* Section 2 */}
                <div className='Border item2'>
                    {/* <h3>Web Developer &amp; Programmer</h3> */}
                    <img src={HeroShot} class='HeroShot' alt=''></img>
                </div>

                {/* Section 3 */}
                <div className='Border item3'>
                    <p class='fst-italic'>
                        - I'm proficient in HTML, CSS, JavaScript, and C#. I create captivating websites and innovative software
                        applications. -
                    </p>
                   
                    <p>
                        As a skilled web developer and programmer proficient in HTML, CSS, JavaScript, and C#, I bring a range of expertise
                        in crafting captivating websites and innovative software applications. Eager to contribute my talents and
                        collaborate with a team, I'm dedicated to delivering exceptional solutions that make a meaningful impact on
                        everyone.
                    </p>
                </div>

                {/* Section 4 */}
                <div className=' Border item4'>
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
                            <i class='bi bi-chevron-right'></i> <strong>Email:</strong> <span>AidanMcQuillan917@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </Container>
        </>
    )
}
