import React from 'react';

const Project = ({ imageUrl, altText, linkUrl }) => {
  return (
    <a href={linkUrl} className="grid-container">
      <img src={imageUrl} alt={altText} style={{ width: '500px', height: '300px' }} />
      <div className="content">
        {/* <h3>{projectTitle}</h3> */}
      </div>
    </a>
  );
};

export default Project;