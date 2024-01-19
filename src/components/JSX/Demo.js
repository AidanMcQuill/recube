import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Dropdown from 'react-bootstrap/Dropdown'
import { clear } from '@testing-library/user-event/dist/clear'
import '../JSX/page.scss'

export default function Demo() {
    const navigate = useNavigate()
    const [active, setActive] = useState(true)

    const handleClick = (route) => {
        setActive(!active)
        // Navigate to the AboutMe component when the mesh is clicked
        navigate(route)
    }
    return (
        <>
            <div className='ArtCard'>
                Aidan McQuillan <span>(b. 2003)</span>
                <br />
                <i>The Developer,</i> <span>2023</span>
                <br />
                <span className='tiny'>Click, Drag, Zoom, Shift, Pinch, Pull, and Shake</span>
                {/* Message for mobile users */}
                {/* DROPDOWN FOR MOBILE USERS */}
                <Dropdown className='mobileMenu'>
                    <Dropdown.Toggle id='dropdown-basic' className='dropBTN'>
                       Main Menu
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleClick('/')}>Home</Dropdown.Item>
                    <hr />
                    <Dropdown.Item onClick={() => handleClick('/about')}>About Me</Dropdown.Item>
                    <hr />
                    <Dropdown.Item onClick={() => handleClick('/skills')}>Skills</Dropdown.Item>
                    <hr />
                    <Dropdown.Item onClick={() => handleClick('/resume')}>Resume</Dropdown.Item>
                    <hr />
                    <Dropdown.Item onClick={() => handleClick('/portfolio')}>Portfolio</Dropdown.Item>
                    <hr />
                    <Dropdown.Item onClick={() => handleClick('/connections')}>Connections</Dropdown.Item>
                    <hr />
                    <Dropdown.Item onClick={() => handleClick('/contact')}>Team Up</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className='Welcome'>
                <h4>WELCOME USER</h4>
            </div>
        </>
    )
}
