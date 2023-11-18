import React, { useState } from 'react'
import './card.css'

export default function Cards() {
    const [cardz] = useState([
        {
            title: 'card-1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum',
        },
        {
            title: 'card-2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum',
        },
        {
            title: 'card-3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum',
        },
        {
            title: 'card-4',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum',
        },
        {
            title: 'card-5',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum',
        },
        {
            title: 'card-6',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum',
        }
    ])
    return (
        <div>
            <section>
                <div className='Container'>
                    <h2>Responsive Cards</h2>
                    <div className='cardz'>
                        {cardz.map((cardz, c) => (
                            <div key={c} className='card'>
                                <h1>{cardz.title}</h1>
                                <p>{cardz.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
