import React, { useState } from 'react'
import './page.scss'
import { useNavigate } from 'react-router-dom'
import { Center, Float } from '@react-three/drei'
import Dropdown from 'react-bootstrap/Dropdown'
import { TfiAlignJustify } from 'react-icons/tfi'

export default function Layout() {
    const navigate = useNavigate()
    const [active, setActive] = useState(true)

    const handleClick = (route) => {
        setActive(!active)
        // Navigate to the AboutMe component when the mesh is clicked
        navigate(route)
    }

    return (
        <>
            <div className='Layout'>
                <h1 className='Btext' onClick={() => handleClick('/')}>
                    Aidan McQuillan
                </h1>

                <h1 className='Btext team' onClick={() => handleClick('/contact')}>
                    Connect
                </h1>
            </div>
            <hr />
            <Dropdown className='mobileMenu' data-bs-theme="dark">
                <Dropdown.Toggle className='dropBTN' variant="secondary">Menu</Dropdown.Toggle>

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
                    <Dropdown.Item onClick={() => handleClick('/contact')}>Contact Me</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <hr className='hrMobile' />
        </>
    )
}
