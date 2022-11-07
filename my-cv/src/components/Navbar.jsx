import React, {useContext} from 'react'
import About from './About';
import './Navbar.css';
import { MyContext } from "../Shared/Context"

const Navbar = () => {
const { setShowState } = useContext(MyContext)
 
  return (
    <nav>
        <button onClick={()=>setShowState('ABOUT')}>ABOUT</button>
        <button onClick={()=>setShowState('EDUCATION')}>EDUCATION</button>
        <button onClick={()=>setShowState('EXPERIENCE')}>EXPERIENCE</button>
        <button onClick={()=>setShowState('MORE')}>MORE</button> 
   </nav> 
   


  )
}

export default Navbar