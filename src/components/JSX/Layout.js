import React, { useState } from 'react'
import './page.scss'
import { useNavigate } from 'react-router-dom'
import { Float } from '@react-three/drei'

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
                    Aidan McQuillan <span>back to the gallery</span>
                </h1>
                <h1 className='Btext team' onClick={() => handleClick('/contact')}>
                    Team Up?
                </h1>
            </div>
            <hr/>
        </>
    )
}
