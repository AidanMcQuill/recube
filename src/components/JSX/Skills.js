import React from 'react'
import Layout from './Layout'
import Container from 'react-bootstrap/Container'
import './page.scss'

export default function Skills() {
    return (
        <>
            <Layout />
            <Container className='container skills'>
                {/* Section 1 */}
                <div class='Border skill-tab'>
                    <h2>Skills</h2>
                    <p>
                        I possess a diverse skill set that allows me to excel in web development and software programming. My wide range of
                        abilities enables me to create dynamic websites, user-friendly applications, and contribute effectively to various
                        projects.
                    </p>
                </div>

                {/* Section 2 */}
                {/* HTML */}
                <div className='Border skill1'>
                    <h1 className='pb-2'>React</h1>
                    <p className='Border m-1'>React frontend</p>
                </div>
                {/* CSS */}
                <div className='Border skill2'>
                    <h1 className='pb-2'>CSS</h1>
                    <p className='Border m-1'>Clean Styles</p>
                </div>
                {/* JS */}
                <div className='Border skill3'>
                    <h1 className='pb-2'>JavaScript</h1>
                    <p className='Border m-1'>Adaptable JavaScript </p>
                </div>
                <div className='Border skill4'>
                    <h1 className='pb-2'>C#</h1>
                    <p className='Border m-1'>Backend C#</p>
                </div>
                <div className='Border skill5'>
                    <h1 className='pb-2'>SQL</h1>
                    <p className='Border m-1'>SQL Databases</p>
                </div>
                <div className='Border skill6'>
                    <h1 className='pb-2'>Adobe</h1>
                    <p className='Border m-1'>Adobe Creative Softwares</p>
                </div>

                <div class='Border service-tab'>
                    <h2>Services</h2>
                </div>
                <div className='Border service1'>
                    <h1 className='pb-2'>Front-End</h1>
                    <p className='Border m-1'>Clean,slick, and stylish UI/UX for users</p>
                </div>
                <div className='Border service2'>
                    <h1 className='pb-2'>Back-End</h1>
                    <p className='Border m-1'>I make sure the gears will turn</p>
                </div>
                <div className='Border service3'>
                    <h1 className='pb-2'>Adobe</h1>
                    <p className='Border m-1'>Creative software bringing Ideas to life</p>
                </div>
            </Container>
        </>
    )
}
