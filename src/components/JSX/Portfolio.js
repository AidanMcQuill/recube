import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Layout from './Layout'
import BB from '../../assets/BlockBeasts.png'
import todo from '../../assets/TODO.png'
import AirAidan from '../../assets/AirAidans.png'

export default function Portfolio() {
    return (
        <>
            <Layout />
            <Container className='portfolio'>
                {/* Section 1 */}
                <div class='Border Cards card0'>
                    <h2>Portfolio</h2>
                    <p className='Border'>
                        I create dynamic and interactive portfolio items for programming and software development, combining design,
                        functionality, and coding prowess to showcase my skills effectively.
                    </p>
                </div>

                <div className='cards pt-3'>
                    {/* Section 2 */}

                    <li className='cards_item'>
                        <div className='Border Cards card1'>
                            <img src={BB} alt='BlockBeasts' />
                            <h2> - Block Beasts - </h2>
                            <button className='Border'>Learn More</button>
                        </div>
                    </li>

                    <li className='cards_item'>
                        <div className='Border Cards card2'>
                            <img src={todo} alt='ToDo' />
                            <h2> - ReactJS ToDo App - </h2>
                            <button className='Border'>Learn More</button>
                        </div>
                    </li>

                    <li className='cards_item'>
                        <div className='Border Cards card3'>
                            <img src={AirAidan} alt='ToDo' />
                            <h2> - AirAidans - </h2>
                            <button className='Border'>Learn More</button>
                        </div>
                    </li>
                </div>
            </Container>
        </>
    )
}
