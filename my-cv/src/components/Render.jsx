import React, { useContext } from 'react'
import { MyContext } from '../Shared/Context'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import More from './More'


const Render = () => {
const { showState } = useContext(MyContext)
    return (
    <div>
    {showState === "ABOUT" && <About/>}
    {showState === "EDUCATION" && <Education/>}
    {showState === "EXPERIENCE" && <Experience/>}
    {showState === "MORE" && <More/>}
    
    </div>
  )
}

export default Render