import React from 'react';
import Project from './Project';

const ProjectSection = () => {
  return (
    <section id="work">
      <h2>Work</h2>
      <Project imageUrl="./images/Koding Kitchen.png" altText="Recipe Generator" linkUrl="https://example.com/project1" projectTitle="Recipe Generator" />
      <Project imageUrl="./images/Weather App.png" altText="Weather App" linkUrl="https://example.com/project2" projectTitle="Weather App" />
      <Project imageUrl="./images/workday scheduler.png" altText="Work Item 3" linkUrl="https://example.com/project3" projectTitle="Work Item 3" />
      <Project imageUrl="./images/Horiseon code refractor.png" altText="Work Item 4" linkUrl="https://example.com/project4" projectTitle="Work Item 4" />
      <Project imageUrl="./images/passwordgenerator.png" altText="Work Item 5" linkUrl="https://example.com/project5" projectTitle="Work Item 5" />
      <Project imageUrl="./images/passwordgenerator.png" altText="Work Item 5" linkUrl="https://example.com/project5" projectTitle="Work Item 5" />
    </section>
  );
};

export default ProjectSection;
