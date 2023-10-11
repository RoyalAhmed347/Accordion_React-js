import React, { useState } from 'react'
import './qustion.css'

const Qustion = ({id,qust,ans}) => {
    const [show, setShow] = useState(false);
    const ansShow = () =>{
        setShow(!show)
    }
  return (
    <>
        <div className='Q-sec'>
        <div className='heading'>
          <p className='icon' onClick={ansShow}> { show? "-":"+"} </p>
          <h3>{qust}</h3>
        </div>
        <hr/>
        <p className='ans' style={{display: show? "block" : "none" ,textAlign: 'start'}}>{ans}</p>
      </div>
    </>
  )
}

export default Qustion