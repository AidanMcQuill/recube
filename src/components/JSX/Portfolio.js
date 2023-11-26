// Portfolio.js
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Layout from './Layout'
import BB from '../../assets/BlockBeasts.png'
import todo from '../../assets/TODO.png'
import AirAidan from '../../assets/AirAidans.png'
import Footer from './Footer'
import ProjectModal from './ProjectModal'
import { motion } from 'framer-motion'
import BackToTopButton from './BackToTopButton'

export default function Portfolio() {
    const [showModal, setShowModal] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            title: 'Block Beasts',
            image: BB,
            description: 'Description of Block Beasts project.',
            skills: 'React, Node.js, MongoDB',
            projectLink: 'https://example.com/block-beasts',
        },
        {
            title: 'ReactJS ToDo App',
            image: todo,
            description: 'Description of ReactJS ToDo App project.',
            skills: 'React, Redux',
            projectLink: 'https://example.com/react-todo-app',
        },
        {
            title: 'AirAidans',
            image: AirAidan,
            description: 'Description of AirAidans project.',
            skills: 'HTML, CSS, JavaScript',
            projectLink: 'https://example.com/air-aidans',
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
                        <a href='/connections' className='Border'>
                            Next: Connections
                        </a>
                    </div>
                <BackToTopButton />
            </Container>
            <Footer />
            <ProjectModal show={showModal} onHide={handleHideModal} project={selectedProject} />
        </>
    )
}
