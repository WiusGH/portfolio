import './App.css';
import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Intro from './components/Intro.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import ContactMe from './components/ContactMe.tsx';

function App() {
  return (
      <div className="App">
        <Header />
        <Intro />
        <About />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
  );
};

export default App;
