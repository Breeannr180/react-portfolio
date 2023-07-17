import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          name: "about me"
        }
      ],
      currentPage: {
        name: "about me"
      }
    };
  }

  render() {
    return (
      <div>
        <h1>About Me</h1>
        <p>I received my Bachelors in Tourism and Communications from ASU and a Master's in Business Administration. I have many years of experience in the financial industry and am a certified full stack web developer.</p>
      </div>
    );
  }
}

export default About;
