import React, {useContext} from 'react'
import './Navbar.scss';
import { MyContext } from "../Shared/Context"

const Navbar = () => {
const { setInfo } = useContext(MyContext)
 
  return (
    <nav>
        <button onClick={()=>setInfo('ABOUT')}>ABOUT</button>
        <button onClick={()=>setInfo('EDUCATION')}>EDUCATION</button>
        <button onClick={()=>setInfo('EXPERIENCE')}>EXPERIENCE</button>
        <button onClick={()=>setInfo('MORE')}>MORE</button> 
   </nav> 
   


  )
}

export default Navbar