import React from 'react'
import Layout from './Layout'
import Container from 'react-bootstrap/Container'
import { motion } from 'framer-motion'
import BackToTopButton from './BackToTopButton'
// Images
import Alicia from '../../assets/classmates/AliciaVillegas.jpg'
import Chanel from '../../assets/classmates/ChanelDubreuil.jpg'
import Chris from '../../assets/classmates/ChrisRandall.jpg'
import Gene from '../../assets/classmates/GeneCathcart.jpg'
import Paul from '../../assets/classmates/PaulValenti.JPG'
import Zoey from '../../assets/classmates/ZoeyBateman.jpeg'
import NoImage from '../../assets/classmates/NoImage.jpg'

export default function Connections() {
    return (
        <>
        <div className='ConnPop pops'>
                <h4>Connections</h4>
            </div>
            <Layout />
            <Container className='connections'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 3 } }} exit={{ color: 'none' }}>
                <div className='conn'>
                    {/* Heading  */}
                    <h2>Connections</h2>
                    <div class='Border connect'>
                        <p>
                            This digital hub is a central meeting point for connecting with my fellow Centriq classmates. Serving as a
                            portal to personal websites, it offers a straightforward way to explore each developer's unique skills and
                            projects. Join me in navigating this network, discovering the diverse talents within our community.
                        </p>
                    </div>
                    <h3>Centriq's Full Stack Coding Program</h3>
                    {/* Main */}
                    <div className='connect pt-3'>
                        {/* Section 2 */}

                        <li className='cards_item'>
                            <div className='Border cons '>
                                <img src={NoImage} alt='BlockBeasts' />
                                <a href='aliciavillegas.net ' className='Border'>
                                    Alex Davenport
                                </a>
                            </div>
                        </li>
                        <li className='cards_item'>
                            <div className='Border cons '>
                                <img src={Alicia} alt='BlockBeasts' />
                                <a href='aliciavillegas.net ' className='Border'>
                                    Alicia Villegas
                                </a>
                            </div>
                        </li>

                        <li className='cards_item'>
                            <div className='Border cons card2'>
                                <img src={Chanel} alt='ToDo' />
                                <a href='aliciavillegas.net ' className='Border'>
                                    Alicia Villegas
                                </a>
                            </div>
                        </li>
                    </div>
                </div>
                <BackToTopButton />

                </motion.div>
                <div className='nextConn'>
                    <a href='/contact' className='Border'>
                        Next: Contact Me
                    </a>
                </div>
            </Container>
        </>
    )
}
