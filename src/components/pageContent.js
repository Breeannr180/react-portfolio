import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PageContent = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
};

export default PageContent;
