import { Scroll } from '@react-three/drei'
import React from 'react'
import { useEffect, useState } from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md'

export default function BackToTopButton() {
    const [scrollVisible, setScrollVisible] = useState(false)

    const handleScroll = () => {
        const scrollThreshold = 100 // You can adjust this threshold as needed
        const currentScrollY = window.scrollY

        if (currentScrollY > scrollThreshold && !scrollVisible) {
            setScrollVisible(true)
        } else if (currentScrollY <= scrollThreshold && scrollVisible) {
            setScrollVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollVisible])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className="UpToTop">
            <button
                onClick={scrollUp}
                className={`scrollin ${scrollVisible ? 'visible' : ''}`}
            >
                <MdOutlineKeyboardDoubleArrowUp />
            </button>
        </div>
    )
}
