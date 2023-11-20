import Container from 'react-bootstrap/Container'
import Layout from './Layout'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ki1k89q', 'template_9nmz25m', form.current, 'Dr5IQsjo0UFrcl620').then(
            (result) => {
                console.log(result.text)
            },
            (error) => {
                console.log(error.text)
            }
        )
    }

    return (
        <>
            <Layout />
            <Container className='Contact'>
                {/* Summary */}
                <div className='Head'>
                    <h2 className='Border'>
                        I'm ready to level up together. Feel free to drop a message, and let's craft something extraordinary in the world of
                        full-stack development.
                    </h2>
                </div>
                <div className='mainForm'>
                    {/* FORM */}
                    <div className='row'>
                        <div className='col-md-5'>
                            <form ref={form} onSubmit={sendEmail} className='Border Form'>
                              <h1>Write Me A Message</h1>
                                <ul>
                                    <li>
                                        <label>Name</label>
                                        <input type='text' name='user_name' />
                                    </li>
                                    <li>
                                        <label>Email:</label>
                                        <input type='email' name='user_email' />
                                    </li>
                                    <li>
                                        <label>Message:</label>
                                        <textarea name='message' />
                                    </li>
                                    <li><input type='submit' value='Send' /></li>
                                </ul>
                            </form>
                        </div>
                        <div className='col-md-2'></div>
                        <div className='col-md-5'>
                            <p className='Border'>Check out these other links to learn more about me</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
