import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Layout from './Layout'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import BackToTopButton from './BackToTopButton'
import { FaHammer } from 'react-icons/fa6'
import { MdMessage } from 'react-icons/md'
import { clear } from '@testing-library/user-event/dist/clear'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    const closeSuccess = () => setShow(false)
    const OpenSuccess = () => setShow(true)
    const OpenFail = () => setShow2(false)
    const CloseFail = () => setShow2(true)

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ki1k89q', 'template_i7br13t', form.current, 'Dr5IQsjo0UFrcl620').then(
            (result) => {
                console.log(result.text)
                OpenSuccess()
            },
            (error) => {
                console.log(error.text)
                OpenFail()
            }
        )
        e.target.reset()
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
            <div className='TeamPop pops'>
                <h4>Contact</h4>
            </div>
            <Layout />
            <Container className='Contact'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }} exit={{ color: 'none' }}>
                    {/* Summary */}
                    <div className='Head'>
                        <h2 className='Border'>
                            Let's chat! Feel free to drop a message, and let's craft something extraordinary in the
                            world of full-stack development. <FaHammer />
                        </h2>
                    </div>
                    <div className='mainForm'>
                        {/* FORM */}
                        <div className='row'>
                            <div className='col-md-6'>
                                <form ref={form} onSubmit={sendEmail} className='Border Form'>
                                    <h1>
                                        Let's connect! <MdMessage />
                                    </h1>
                                    <ul>
                                        <li>
                                            <label>Name</label>
                                            <input type='text' placeholder='Name' name='name' required='required' />
                                        </li>
                                        <li>
                                            <label>Email</label>
                                            <input type='email' name='email' placeholder='Email Address' required='required' />
                                        </li>
                                        <li>
                                            <label>Subject</label>
                                            <input type='text' placeholder='Subject' name='subject' required='required' />
                                        </li>
                                        <li>
                                            <label>Message</label>
                                            <textarea placeholder='Your Message' name='message' required='required' />
                                        </li>
                                        <li>
                                            <input type='submit' value='Send' />
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <div className='col-md-1'>{/* BUFFER */}</div>
                            <div className='col-md-5 Links'>
                                <p className='Border'>Check out these other links to learn more about me</p>
                                <hr />
                                 
                                        <h1 className='Border'>
                                            <a href='https://github.com/AidanMcQuill' target='_blank' rel='noopener noreferrer'>
                                                Github
                                            </a>
                                        </h1>
                                     
                                        <h1 className='Border'>
                                            <a href='https://www.linkedin.com/in/aidan-mcquillan-67a245289/' target='_blank' rel='noopener noreferrer'>
                                                LinkedIn
                                            </a>
                                        </h1>
                                     
                                        <h1 className='Border'>
                                            <a href='https://twitter.com/AidanM16985494' target='_blank' rel='noopener noreferrer'>
                                                Twitter / X
                                            </a>
                                        </h1>
                                     
                            </div>
                        </div>
                        {/* SUCCESS MODAL */}
                        <Modal show={show} onHide={closeSuccess} className='Connmodal'>
                            <Modal.Header closeButton>
                                <Modal.Title className='modalHead'>Thank You!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='modalBody'>
                                Your message was sent successfully! <br />
                                I'll be in touch soon—thanks for reaching out!
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='dark' className='modalButton' onClick={closeSuccess}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        {/* FAIL MODAL */}
                        <Modal show={show2} onHide={CloseFail} className='Connmodal'>
                            <Modal.Header closeButton>
                                <Modal.Title className='modalHead'>Error</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='modalBody'>
                                Your message failed to send.
                                <br />
                                Please make sure all fields are entered. If error continues, please try again later.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant='dark' className='modalButton' onClick={CloseFail}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <BackToTopButton />
                </motion.div>
            </Container>
            <Footer/>
        </>
    )
}
