import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Navigation from './components/navigation';
import Project from './components/Project';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        { name: "About me" },
        { name: "Project" },
        { name: "Contact" },
        { name: "Resume" }
      ],
      currentPage: { name: "about me" },
      projects: [ // Add a new property for projects
        {
          imageUrl: './images/Koding Kitchen.png',
          altText: 'Recipe Generator',
          linkUrl: 'https://ggdave.github.io/Koding-Kitchen/'
        },
        {
          imageUrl: './images/Weather App.png',
          altText: 'Weather App',
          linkUrl: 'https://breeannr180.github.io/weather-app/'
        },
        {
          imageUrl: './images/workday scheduler.png',
          altText: 'Work Day Scheduler',
          linkUrl: 'https://breeannr180.github.io/work-day-scheduler/'
        },
        {
          imageUrl: './images/Horiseon code refractor.png',
          altText: 'Horiseon',
          linkUrl: 'https://breeannr180.github.io/code-refactor/'
        },
        {
          imageUrl: './images/passwordgenerator.png',
          altText: 'Password Generator',
          linkUrl: 'https://breeannr180.github.io/javascript-password-create/'
        },
        // Add more projects here
      ]
    };
  }

  setCurrentPage = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    const { pages, currentPage, projects } = this.state;


    return (
      <div className="App">
        <div className="hero-image">
          <img src={process.env.PUBLIC_URL + '/images/hero-image.jpeg'} alt="Hero Image" />
          <div className="hero-text">
            <h2>Changing the world one project at a time.</h2>
          </div>
        </div>
        <Header>
          <Navigation
            pages={pages}
            setCurrentPage={this.setCurrentPage}
            currentPage={currentPage}
          />
        </Header>
        <main>
          <section id="work">
            <h2>Work</h2>
            {projects.map((project, index) => (
              <Project
                key={index}
                imageUrl={project.imageUrl}
                altText={project.altText}
                linkUrl={project.linkUrl}
              />
            ))}
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;


//   return (
//     <div className="App">
//       <header />
//       <section className="hero-image">
//         <div>
//           <h2>Changing the world one project at a time.</h2>
//         </div>
//       </section>
//       <main>
//         <section className="container-right">
//           <div className="right-column">
//             <div id="about">
//               <h2>About</h2>
//               <p>I received my Bachelors in Tourism and Communications from ASU and a Master's in Business Administration. I have many years of experience in the financial industry and am a certified full stack web developer.</p>
//               <img src="./images/headshot.jpeg" alt="headshot" style={{ width: '150px', height: '250px' }} />
//             </div>

//             <section id="work">
//               <h2>Work</h2>
//               <project imageUrl="./images/Koding Kitchen.png" altText="Recipe Generator" />
//               <project imageUrl="./images/Weather App.png" altText="Weather App" />
//               <project imageUrl="./images/workday scheduler.png" altText="Work Item 3" />
//               <project imageUrl="./images/Horiseon code refractor.png" altText="Work Item 4" />
//               <project imageUrl="./images/passwordgenerator.png" altText="Work Item 5" />
//             </section>

//             <section id="contact">
//               <h2>Contact Info</h2>
//               <div className="contact-me">
//                 <a href="mailto:breeannr@hotmail.com">Email</a>
//                 <a href="tel:+602-853-8990">Phone</a>
//                 <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a>
//                 <a href="https://www.linkedin.com/in/breeann-bond/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//                 <a href="https://github.com/Breeannr180" target="_blank" rel="noopener noreferrer">GitHub</a>
//               </div>
//             </section>
//           </div>
//         </section>
//       </main>
//       <footer />
//     </div>
//   );
// }

// export default App