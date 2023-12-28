import React, {useState} from 'react'
import Layout from './Layout'
import Container from 'react-bootstrap/Container'
import { motion } from 'framer-motion'
import BackToTopButton from './BackToTopButton'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
// Images
import Alex from '../../assets/classmates/AlexDavenport.jpg'
import Alicia from '../../assets/classmates/AliciaVillegas.jpg'
import Chanel from '../../assets/classmates/ChanelDubreuil.jpg'
import Chris from '../../assets/classmates/ChrisRandall.jpg'
import Daniel from '../../assets/classmates/DanielAmbro.jpg'
import Gene from '../../assets/classmates/GeneCathcart.jpg'
import Paul from '../../assets/classmates/PaulValenti.JPG'
import Zoey from '../../assets/classmates/ZoeyBateman.jpeg'
import NoImage from '../../assets/classmates/NoImage.jpg'


export default function Connections() {
    const navigate = useNavigate()
    const [active, setActive] = useState(true)

    const handleClick = (route) => {
        setActive(!active)
        // Navigate to the AboutMe component when the mesh is clicked
        navigate(route)
    }
    
    const handleBackToTopClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
      
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

                        {/* <li className='cards_item'>
                            <div className='Border cons '>
                                <img src={NoImage} alt='ConImg' />
                                <a href='' className='Border'>
                                    Alex Davenport (No Link)
                                </a>
                            </div>
                        </li> */}
                         <li className='cards_item'>
                            <div className='Border cons '>
                                <img src={Alex} alt='ConImg' />
                                <a href='http://alex-davenport.com/' className='Border' target='_blank' rel='noreferrer'>
                                    Alex Davenport
                                </a>
                            </div>
                        </li>
                        <li className='cards_item'>
                            <div className='Border cons '>
                                <img src={Alicia} alt='ConImg' />
                                <a href='http://aliciavillegas.net/ ' className='Border' target='_blank' rel='noreferrer'>
                                    Alicia Villegas
                                </a>
                            </div>
                        </li>

                        <li className='cards_item'>
                            <div className='Border cons card2'>
                                <img src={Chanel} alt='ToDo' />
                                <a href='http://chaneldubreuil.com' className='Border'target='_blank' rel='noreferrer' >
                                    Chanel Dubreuil
                                </a>
                            </div>
                        </li>
                        <li className='cards_item'>
                            <div className='Border cons '>
                                <img src={Chris} alt='ConImg' />
                                <a href='http://devchristopherrandall.com/' className='Border' target='_blank' rel='noreferrer'>
                                    Chris Randall
                                </a>
                            </div>
                        </li>
                        <li className='cards_item'>
                            <div className='Border cons '>
                                <img src={Daniel} alt='ConImg' />
                                <a href='http://danielambro.com/' className='Border' target='_blank' rel='noreferrer'>
                                    Daniel Ambro
                                </a>
                            </div>
                        </li>

                        <li className='cards_item'>
                            <div className='Border cons card2'>
                                <img src={Gene} alt='ToDo' />
                                <a href='http://www.genecathcart.com/' className='Border' target='_blank' rel='noreferrer'>
                                    Eugene Cathcart
                                </a>
                            </div>
                        </li>
                        <li className='cards_item'>
                            <div className='Border cons '>
                                <img src={Paul} alt='ConImg' />
                                <a href='http://bluprintdevelopment.com/' className='Border' target='_blank' rel='noreferrer'>
                                    Paul Valenti
                                </a>
                            </div>
                        </li>
                        <li className='cards_item'>
                            <div className='Border cons '>
                                <img src={Zoey} alt='ConImg' />
                                <a href='http://zoeybateman.com/' className='Border' target='_blank' rel='noreferrer'>
                                    Zoey Bateman
                                </a>
                            </div>
                        </li>
                       

                    </div>
                </div>
                <BackToTopButton />

                </motion.div>
                <div className='nextConn'>
                <h1 className=' nexts3 Border' onClick={() => handleClick('/contact')}>
                            Next: Contact
                        </h1>
                </div>
            </Container>
            <div className='BackTop'>
                        <h1 className=' nexts5 Border' onClick={handleBackToTopClick}>
                            Back To Top
                        </h1>
                    </div>
            <Footer/>
        </>
    )
}
