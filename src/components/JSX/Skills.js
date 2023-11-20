import React from 'react'
import Layout from './Layout'
import Container from 'react-bootstrap/Container'
import './page.scss'
import { IconContext } from 'react-icons'

// LOGOS
import { DiBootstrap } from 'react-icons/di'
import Footer from './Footer'
import BackToTopButton from './BackToTopButton'

export default function Skills() {
    return (
        <>
            <Layout />
            <Container className='skills'>
                {/* Section 1 */}
                <div className='header row'>
                    <h2 className='Border'>
                        <i>Skills</i>
                    </h2>
                    <p className='Border p-3'>
                        <span className='intro'>
                            I'm a Full Stack Developer with a robust skill set honed through immersive experiences. Let's dive into the core
                            of what I bring to the table:
                        </span>
                        <hr />
                        <br /> <span>Front End Mastery:</span> I specialize in crafting captivating user interfaces using HTML5, JavaScript,
                        jQuery, jQueryUI, CSS3, and responsive/mobile web development techniques. Bootstrap and ReactJS are my go-to tools
                        for ensuring seamless and engaging front-end experiences.
                        <br />
                        <hr /> <span>Middle Tier Expertise:</span> In the middle tier, I excel in using C#, .NET Core MVC, LINQ, EF, and
                        Razor Pages. This enables me to build dynamic web applications that seamlessly bridge the gap between user
                        interaction and back-end functionality. <br /> <br />
                        <hr />
                        <span>Back End Command:</span> My proficiency extends to the back end, where I manage databases with SQL and SQL
                        Server. I leverage Axios and work seamlessly with tools like Azure Data Studio, Visual Studio, Visual Studio Code,
                        SSMS, and Git Bash to ensure a smooth and efficient development process.
                    </p>
                </div>

                {/* Section 2 */}
                <div className='rows'>
                    {/* Front-End */}
                    <div className='row'>
                        <h1>Front End</h1>
                        <h4 className='Border'>HTML5</h4>
                        <h4 className='Border'>JavaScript</h4>
                        <h4 className='Border'>jQuery</h4>
                        <h4 className='Border'>CSS3</h4>
                        <h4 className='Border'>Mobile</h4>
                        <h4 className='Border'>ReactJS</h4>
                        <h4 className='Border'><a href="https://getbootstrap.com/" target='_blank' rel="noreferrer">Bootstrap<DiBootstrap/></a></h4>
                    </div>
                    {/* Back-End */}
                    <div className='row'>
                        <h1>Back End</h1>
                        <h4 className='Border'>HTML5</h4>
                        <h4 className='Border'>JavaScript</h4>
                        <h4 className='Border'>jQuery</h4>
                        <h4 className='Border'>CSS3</h4>
                        <h4 className='Border'>Mobile</h4>
                    </div>
                    {/* Tools */}
                    <div className='row'>
                        <h1>Creative Tools</h1>
                        <h4 className='Border'>HTML5</h4>
                        <h4 className='Border'>JavaScript</h4>
                        <h4 className='Border'>jQuery</h4>
                        <h4 className='Border'>CSS3</h4>
                        <h4 className='Border'>Mobile</h4>
                    </div>
                </div>
            </Container>
            <BackToTopButton/>
            <Footer/>
        </>
    )
}
