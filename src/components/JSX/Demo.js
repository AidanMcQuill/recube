import React from 'react'
import { motion } from 'framer-motion'
import Dropdown from 'react-bootstrap/Dropdown'
import { clear } from '@testing-library/user-event/dist/clear'
import '../JSX/page.scss'

export default function Demo() {
    return (
        <>
            <div className='ArtCard'>
                Aidan McQuillan <span>(b. 2003)</span>
                <br />
                <i>The Developer,</i> <span>2023</span>
                <br />
                <span className='tiny'>Shift and drag</span>
                {/* Message for mobile users */}
                {/* DROPDOWN FOR MOBILE USERS */}
                <Dropdown className='mobileMenu'>
                    <Dropdown.Toggle id='dropdown-basic' className='dropBTN'>
                        Menu
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href='/'>Home</Dropdown.Item>
                        <hr />
                        <Dropdown.Item href='/about'>About Me</Dropdown.Item>
                        <hr />
                        <Dropdown.Item href='/skills'>Skills</Dropdown.Item>
                        <hr />
                        <Dropdown.Item href='/resume'>Resume</Dropdown.Item>
                        <hr />
                        <Dropdown.Item href='/portfolio'>Portfolio</Dropdown.Item>
                        <hr />
                        <Dropdown.Item href='/connections'>Connections</Dropdown.Item>
                        <hr />
                        <Dropdown.Item href='/contact'>Team Up</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <h1 className='mobileMessage Border'> = drag to view = <br />(Larger screens are recommended)</h1>
            </div>
            <div className='Welcome'>
                <h4>WELCOME USER</h4>
            </div>
            <div className='ClickMe'>
                <h4>Click A Screen</h4>
            </div>
        </>
    )
}
