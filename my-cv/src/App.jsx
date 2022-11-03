import { useState } from "react";
import './App.css';

import Heroine from './components/Heroine';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import More from './components/More';

import { CV } from './CV/CV';

const { heroine, education, books, exhibitions, lecturer, design, languages, habilities, awards, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
 
  return (
    <div className='App'>
    <main>
       <Heroine heroine={heroine} />
       <div className="infoMain">
       <About aboutMe={heroine.aboutMe} />
       
    <button onClick={()=> setShowEducation(true)}>Education</button>
    <button onClick={()=>setShowEducation(false)}>Experience</button>

    <div>
      {showEducation ? (
        <Education education={education}/>
      ) : (
        <Experience experience={experience} />
      )}
    </div>

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
        />
        </div>
        </main>
    </div>
  );
} 

export default App;
