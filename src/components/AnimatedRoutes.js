import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainPage from '../components/MainPage'
import AboutMe from '../components/JSX/AboutMe'
import Skills from '../components/JSX/Skills'
import Resume from '../components/JSX/Resume'
import Portfolio from '../components/JSX/Portfolio'
import Contact from '../components/JSX/Contact'
import Connections from '../components/JSX/Connections'

import {AnimatePresence} from 'framer-motion'


export default function AnimatedRoutes() {
    const location = useLocation()
    return (
        <div>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutMe />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/connections' element={<Connections />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}
