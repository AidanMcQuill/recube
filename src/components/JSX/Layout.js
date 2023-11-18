import React, { useState } from 'react'
import './page.scss'
import { useNavigate } from 'react-router-dom'

export default function Layout() {

    const navigate = useNavigate()
    const [active, setActive] = useState(true)

    const handleClick = (route) => {
        setActive(!active)
        // Navigate to the AboutMe component when the mesh is clicked
        navigate(route)
    }


  return (
    <div className='Layout'>
        <h1 className='Btext' onClick={() => handleClick('/')}>Aidan McQuillan</h1>
        <hr/>
    </div>
  )
}
