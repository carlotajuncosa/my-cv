import './App.scss';
import { useState } from "react";
import { MyContext } from "./Shared/Context";

import Header from './components/Header';
import { CV } from './CV/CV';
import Render from './components/Render';


const { heroine, education, books, exhibitions, lecturer, design, languages, habilities, awards, volunteer } = CV;

function App() {
 const [ info, setInfo ] = useState('ABOUT');

  return (
    <MyContext.Provider value={{info, setInfo, heroine, education, books, exhibitions, lecturer, design, languages, habilities, awards, volunteer}}>
    <div className='App'>
    <header>
       <Header/>
    </header>
    <main>
   
    <Render/>
    <div className="whiteSquare"></div>


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
    <footer>
      <p>This website was built using React.</p>
    </footer>
    </MyContext.Provider>
    
  );
} 

export default App;
