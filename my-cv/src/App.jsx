import './App.css';

/* import { Heroine, About, Education, Experience, More } from './components'; */
import Heroine from './components/Heroine';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import More from './components/More';

import { CV } from './CV/CV';

const { heroine, education, books, exhibitions, lecturer, design, languages, habilities, awards, volunteer } = CV;

function App() {
  return (
    <div className='App'>
    <main>
       <Heroine heroine={heroine} />
       <div className="infoMain">
       <About aboutMe={heroine.aboutMe} />
       <Education education={education} />
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
