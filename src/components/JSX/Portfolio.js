// Portfolio.js
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Layout from './Layout'
import BB from '../../assets/BlockBeasts.png'
import todo from '../../assets/TODO.png'
import AirAidan from '../../assets/AirAidans.png'
import SAT from '../../assets/SATapp.png'
import Footer from './Footer'
import ProjectModal from './ProjectModal'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import BackToTopButton from './BackToTopButton'

export default function Portfolio() {
    const [showModal, setShowModal] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    
    const handleBackToTopClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    const projects = [
        {
            title: 'Block Beasts',
            image: BB,
            description: 'Block Beasts is a captivating game where I delve into the fundamentals of the language. Featuring randomly generated beasts for thrilling battles, this project highlights my ability to create engaging applications within the versatile landscape of C#.',
            skills: 'C#, Visual Studio, Git, Trello',
            projectLink: 'https://github.com/AidanMcQuill/Block-Beasts',
        },
        {
            title: 'ReactJS ToDo App',
            image: todo,
            description: 'With React I coded a Web API seamlessly integrated with a To-Do list using ReactJS. This endeavor underlines my capacity to proficiently handle APIs and databases, complemented by the incorporation of Swagger for superior API documentation. The outcome is a seamlessly functional web application that underscores my prowess in both creating and sustaining APIs, ensuring an uninterrupted and user-friendly experience.',
            skills: 'React, JS, SQL, Axios, webAPI, Swagger, Visual Studio Code',
            projectLink: 'http://todo.aidanmcquillan.com/',
        },
        {
            title: 'AirAidans',
            image: AirAidan,
            description: ' I coded a secure MVC .NET Core application tailored for the management of product data in the virtual shoe emporium, AirAidans. Implementing an active database and leveraging MVC architecture, the application offers a seamless shopping experience. Users can peruse a diverse product range, confidently add items to their session-based locker, and relish in authentication and login features for a personalized and secure shopping expedition.',
            skills: 'MVC, .netCore, EF, SQL, CSS, Bootstrap',
            projectLink: 'https://github.com/AidanMcQuill/AirAidans',
        },
        {
            title: 'SAT app',
            image: SAT,
            description: 'This is a dynamic 2-tier MVC .NET Core application, it was a collaborative effort in pair programming which embraced agile/scrum methodologies.The MVC architecture ensures a smooth user experience, enabling effective coordination and planning. Users benefit from personalized scheduling features, security measures, and was built from the efficiency of pair programming, making it a valuable asset for optimizing SAT preparation',
            skills: 'MVC, .netCore, EF, SQL, CSS, Bootstrap, Agile, Scrum',
            projectLink: 'https://github.com/AidanMcQuill/SATsolution',
        },
    ]

    const handleShowModal = (project) => {
        setSelectedProject(project)
        setShowModal(true)
    }

    const handleHideModal = () => {
        setSelectedProject(null)
        setShowModal(false)
    }

    const navigate = useNavigate()
    const [active, setActive] = useState(true)

    const handleClick = (route) => {
        setActive(!active)
        // Navigate to the AboutMe component when the mesh is clicked
        navigate(route)
    }

    return (
        <>
            <div className='PortPop pops'>
                <h4>Portfolio</h4>
            </div>

            <Layout />
            <Container className='portfolio'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }} exit={{ color: 'none' }}>
                    <div>
                        <div class='Border Cards card0'>
                            <h2>Portfolio</h2>
                            <p className='Border'>
                                I create dynamic and interactive portfolio items for programming and software development, combining design,
                                functionality, and coding prowess to showcase my skills effectively.
                            </p>
                        </div>
                        <div className='cards pt-3'>
                            {projects.map((project, index) => (
                                <li className='cards_item' key={index}>
                                    <div className='Border Cards card1'>
                                        <img src={project.image} alt={project.title} />
                                        <h2> - {project.title} - </h2>
                                        <button className='Border' onClick={() => handleShowModal(project)}>
                                            Learn More
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </div>
                        
                    </div>
                </motion.div>
                    <div className='nextPort'>
                        <h1 onClick={() => handleClick('/connections')} className='Border'>
                            Next: Connections
                        </h1>
                    </div>
                    
                <BackToTopButton />
            </Container>
                    <div className='BackTop'>
                        <h1 className=' nexts5 Border' onClick={handleBackToTopClick}>
                            Back To Top
                        </h1>
                    </div>
            <Footer />
            <ProjectModal show={showModal} onHide={handleHideModal} project={selectedProject} />
        </>
    )
}
