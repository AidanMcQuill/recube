import React from 'react'
import { motion } from 'framer-motion'

export default function Demo() {
  return (
      <>
        
        <div className='ArtCard' style={{ position: 'absolute', top: 40, left: 80, fontSize: '18px', textAlign: 'left' }}>
          Aidan McQuillan <span>(b. 2003)</span>
          <br />
          <i>The Developer,</i> <span>2023</span>
          <br />
          <span className='tiny'>Shift and drag</span>
        </div>
      
          <div className='Welcome'>
          <h4>WELCOME USER</h4>
          </div>
          <div className='ClickMe'>
          <h4>Click A Screen</h4>
          </div>

      </>
  )
}
