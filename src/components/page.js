import React from 'react';
import About from '../About';
import Project from '../Project';
import Contact from '../Contact';
import Resume from '../Resume';


function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'Projects':
        return <Project />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <pageContent>{renderPage()}</pageContent>
    </section>
  );
}
export default Page;