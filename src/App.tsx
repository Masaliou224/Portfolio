import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
