import './App.css'

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'
import ScrollToTop from './components/JSX/ScrollToTop'

function App() {
    return (
        <div>
        <Router>
            <ScrollToTop/>
            <AnimatedRoutes />
        </Router>
        </div>
    )
}

export default App
