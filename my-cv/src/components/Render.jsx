import React, { useContext } from 'react'
import { MyContext } from '../Shared/Context'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import More from './More'


const Render = () => {
const { info } = useContext(MyContext)
    return (
    <div>
    {info === "ABOUT" && <About/>}
    {info === "EDUCATION" && <Education/>}
    {info === "EXPERIENCE" && <Experience/>}
    {info === "MORE" && <More/>}
    
    </div>
  )
}

export default Render