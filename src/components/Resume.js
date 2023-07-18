import React from 'react';
import resumePDF from '../public/resume.pdf';

function ResumeComponent() {
  return (
    <div>
      <h1>Resume</h1>
      <embed src={resumePDF} type="application/pdf" width="100%" height="600px" />
    </div>
  );
}

export default ResumeComponent;
