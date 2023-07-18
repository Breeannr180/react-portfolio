import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Nav from './components/Nav';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <section className="hero-image">
        <div>
          <h2>Changing the world one project at a time.</h2>
        </div>
      </section> */}
      <main>
        <section className="container-right">
          <div className="right-column">
            <div id="about">
              <h2>About</h2>
              <p>I received my Bachelors in Tourism and Communications from ASU and a Master's in Business Administration. I have many years of experience in the financial industry and am a certified full stack web developer.</p>
              <img src="./images/headshot.jpeg" alt="headshot" style={{ width: '150px', height: '250px' }} />
            </div>

            <section id="work">
              <h2>Work</h2>
              <Project imageUrl="./images/Koding Kitchen.png" altText="Recipe Generator" />
              <Project imageUrl="./images/Weather App.png" altText="Weather App" />
              <Project imageUrl="./images/workday scheduler.png" altText="Work Item 3" />
              <Project imageUrl="./images/Horiseon code refractor.png" altText="Work Item 4" />
              <Project imageUrl="./images/passwordgenerator.png" altText="Work Item 5" />
            </section>

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
      </main>
      <Footer />
    </div>
  );
}

export default App;
