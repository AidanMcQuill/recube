import React from 'react'
import Layout from './Layout'
import HeroShot from '../../assets/HeroShot.jpg'
import BackToTopButton from './BackToTopButton'
import './page.scss'
import Container from 'react-bootstrap/Container'
import { motion } from 'framer-motion'
import Footer from './Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import PokeAPI from './PokeAPI'
import { CgPokemon } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

export default function AboutMe() {
    const [pokemonNameInput, setPokemonNameInput] = useState('')

    const handleInputChange = (e) => {
        setPokemonNameInput(e.target.value)
    }

    const handleBackToTopClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    

    const examplePokemonNames = ['pikachu', 'charizard', 'eevee', 'muk']

    const navigate = useNavigate()
    const [active, setActive] = useState(true)

    const handleClick = (route) => {
        setActive(!active)
        // Navigate to the AboutMe component when the mesh is clicked
        navigate(route)
    }

    return (
        <>
            <div className='aboutPop pops'>
                <h4>About</h4>
            </div>
            <Layout />
            <Container className='about'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }} exit={{ color: 'none' }}>
                    {/* Shared Layout Component */}

                    {/* Heading*/}
                    <div className='header row'>
                        <h2 className='Border'>
                            <i>About Me</i>
                        </h2>
                        <p className='Border'>
                            As a skilled web developer and programmer proficient in HTML, CSS, JavaScript, and C#, I bring a range of
                            expertise in crafting captivating websites and innovative software applications. Eager to contribute my talents
                            and collaborate with a team, I'm dedicated to delivering exceptional solutions that make a meaningful impact on
                            everyone.
                        </p>
                    </div>

                    {/* Main Section */}
                    <div class='row pt-5 Aboutcon'>
                        <div class='col-lg-4'>
                            <img src={HeroShot} class='img-fluid img-size img-shadow Border' alt='' />
                            <ul>
                                <li>
                                    <i class='bi bi-chevron-right'></i> <strong>City:</strong> <span>Clarkston, Michigan</span>
                                </li>
                                <li>
                                    <i class='bi bi-chevron-right'></i> <strong>Email:</strong> <span>AidanMcQuillan917@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                        {/* RIGHT SIDE */}
                        <div class='col-lg-8 pt-4 pt-lg-0 content'>
                            <h3>
                                <i>Web Developer &amp; Programmer</i>
                            </h3>

                            <br />
                            {/* <p class='fst-italic quote Border'>
                                - I'm proficient in HTML, CSS, JavaScript, and C#. I create captivating websites and innovative software
                                applications. -
                            </p> */}
                            <br />

                            <p className='Border Aboutsum'>
                                Hello, I'm Aidan McQuillan, a Michigan-based web developer about to graduate from Centriq's Full Stack Web
                                Development bootcamp. I've immersed myself in the .NET Core MVC framework, C#, and the art of full-stack web
                                application design.
                                <br /> <br /> What sets me apart? I'm not just a coder; I'm a creative mind passionate about transforming
                                ideas into unique web experiences. Proficient in HTML, CSS, and JavaScript, I thrive on crafting captivating
                                websites and innovative software applications.
                                <br /> <br /> My journey has equipped me with skills in database management, unit testing, and a deep
                                understanding of the Software Development Lifecycle and Agile Scrum Methodology. Eager to contribute my
                                flair for creativity and collaborate on projects that make a lasting impact, I'm excited to bring your ideas
                                to life through exceptional digital solutions.
                            </p>
                        </div>
                    </div>
                    <div class='row pt-5 PokeRow'>
                        <div className='col-lg-4 '>
                            <p className='Border game'>
                                <h1>Pokemon API</h1>
                                <hr />
                                Immersing myself in the expansive world of video games, I seamlessly fuse my passion for gaming with
                                development skills, integrating the PokeAPI using Axios requests. This implementation allows users to
                                effortlessly explore detailed information about any Pokémon of their choice. Gotta Request 'Em All!
                                <CgPokemon />
                            </p>
                        </div>

                        <div className='col-md-5 box Border'>
                            <input type='text' placeholder='Enter Pokémon name' value={pokemonNameInput} onChange={handleInputChange} />
                            {pokemonNameInput === '' && (
                                <div className='example-box'>
                                    <p>Example Pokémon Names:</p>
                                    <ul>
                                        {examplePokemonNames.map((name) => (
                                            <li key={name} onClick={() => setPokemonNameInput(name)}>
                                                {name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {pokemonNameInput && <PokeAPI pokemonName={pokemonNameInput} />}
                        </div>
                    </div>

                    <div className='nextPage mt-5'>
                        <h1 className=' nexts Border' onClick={() => handleClick('/skills')}>
                            Next: Skills
                        </h1>
                    </div>

                    <div className='BackTop mt-5'>
                        <h1 className=' nexts ' onClick={handleBackToTopClick}>
                            Back To Top
                        </h1>
                    </div>

                    <Footer />
                </motion.div>
                <BackToTopButton />
            </Container>
        </>
    )
}
