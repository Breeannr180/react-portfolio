
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Nav from './components/Nav';
import ProjectSection from './components/Projectsection';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    if (currentPage === "home") {
    return <Home />;
    } else if (currentPage === "about") {
    return <About />;
    } else if (currentPage === "contact") {
    return <Contact />;
    } else if (currentPage === "resume") {
    return <Resume />;
    } else if (currentPage === "work") {
    return <ProjectSection />;
    }
    };
    

  return (
    <div className="App">
      <Header page={currentPage} setPage={setCurrentPage} /> {/* Use Header instead of header */}
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;


function Home() {
  return (
    <section className="container-right">
      <section className="hero-image">
        <div>
          <h2>Changing the world one project at a time.</h2>
        </div>
      </section>
      <div className="right-column">
        <div id="about">
          <h2>About</h2>
          <p>I received my Bachelors in Tourism and Communications from ASU and a Master's in Business Administration. I have many years of experience in the financial industry and am a certified full stack web developer.</p>
          <img src="./images/headshot.jpeg" alt="headshot" style={{ width: '150px', height: '250px' }} />
        </div>

        <section id="contact">
          <h2>Contact Info</h2>
          <div className="contact-me">
            <a href="mailto:breeannr@hotmail.com">Email</a>
            <a href="tel:+602-853-8990">Phone</a>
            <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/in/breeann-bond/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Breeannr180" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>

      </div>
    </section>
  )
}