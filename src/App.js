import React from 'react';

import './f2/css/all.css';
import Slider from './slider.js';
import './anim.css';
import About from './about.js';
import Experience from './experience';
import Skills from './skills';
import Projects from './projects.js';

function App() {
  return (
    <div>
     
      <Slider />
      <About />
      <Experience />
      <Skills />
      <Projects />
      
    </div>
  );
}

export default App;
