import React from 'react';
import './App.css'
import Qustion from './compunent/Qustion'
import Questions from './Questions'


const App = () => {
  return (
    <>
     <section className='mainBox'>
      <h1>React Interview Questions</h1>
      {Questions.map((ques,index)=>{
        return(
          <Qustion key= {index} {...ques}/>
        )
      })}

     </section> 
    </>
  )
}

export default App