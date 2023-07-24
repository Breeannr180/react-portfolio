import React from 'react';
import Project from './Project';

const ProjectSection = () => {
  return (
    <section id="work">
      <h2>Work</h2>
      <Project imageUrl="./images/Koding Kitchen.png" altText="Recipe Generator" linkUrl="https://ggdave.github.io/Koding-Kitchen/" projectTitle="Recipe Generator" />
      <Project imageUrl="./images/Weather App.png" altText="Weather App" linkUrl="https://breeannr180.github.io/weather-app/" projectTitle="Weather App" />
      <Project imageUrl="./images/workday scheduler.png" altText="Work Day Scheduler" linkUrl="https://breeannr180.github.io/work-day-scheduler/" projectTitle="Work Day Scheduler" />
      <Project imageUrl="./images/Horiseon code refractor.png" altText="Work Item 4" linkUrl="https://breeannr180.github.io/code-refactor/" projectTitle="Code Refactor" />
      <Project imageUrl="./images/passwordgenerator.png" altText="Work Item 5" linkUrl="https://breeannr180.github.io/javascript-password-create/" projectTitle="Password Generator" />
      <Project imageUrl="./images/Coding Quiz.png" altText="Coding Quiz" linkUrl="https://breeannr180.github.io/coding-quiz/" projectTitle="Coding Quiz" />
      <Project imageUrl="./images/Whiskers and Wags.png" altText="Pet Adoption Agency" linkUrl="https://guarded-oasis-57262-32f6a86c3b9b.herokuapp.com/" projectTitle="Pet Adoption Agency" />
    </section>
  );
};

export default ProjectSection;
