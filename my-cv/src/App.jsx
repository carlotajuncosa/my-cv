import './App.css';
import { useState } from "react";
import { MyContext } from "./Shared/Context";

import Heroine from './components/Heroine';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import More from './components/More';

import { CV } from './CV/CV';
import Navbar from "./components/Navbar";
import Render from './components/Render';


const { heroine, education, books, exhibitions, lecturer, design, languages, habilities, awards, volunteer } = CV;

function App() {
  const [showState, setShowState] =useState("ABOUT")
 
  return (
    <MyContext.Provider value={({showState, setShowState})}>
    <div className='App'>
    <header>
       <Heroine heroine={heroine} />
    </header>
    <main>
   
    <Render/>


    </main>
       
      
      {/*  <About aboutMe={heroine.aboutMe}/>
       <div className="infoMain">
       <Education education={education}/>
       <Experience 
         books={books} 
         exhibitions={exhibitions}
         lecturer={lecturer}
         design={design} 
         />
       <More
         languages={languages}
         habilities={habilities}
         awards={awards}
         volunteer={volunteer}
        /> </div>*/}
        
    </div>
    </MyContext.Provider>
  );
} 

export default App;
