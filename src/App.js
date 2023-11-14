import './App.css'

import React from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import MainPage from './components/MainPage'
import AboutMe from './components/JSX/AboutMe'
import Skills from './components/JSX/Skills'
import Resume from './components/JSX/Resume'
import Portfolio from './components/JSX/Portfolio'
import Contact from './components/JSX/Contact'
import Connections from './components/JSX/Connections'

function App() {
    return (
        <Router>
            <switch>
                
            </switch>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path='/about' element={<AboutMe/>} />
                <Route path='/skills' element={<Skills/>} />
                <Route path='/resume' element={<Resume/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/connections' element={<Connections/>} />
            </Routes>
        </Router>
    )
}

export default App
