import React from 'react';
import './ScrollablePage.css';
import profileImage from '../Images/ContributorA.jpg';





const ScrollablePage = () => {
  return (
    <div className="scrollable-page">
      {/* Left Sidebar with Navigation */}
      <div className="sidebar">
        <div className="profile-picture">
          <img src={profileImage} alt="Profile" />
        </div>
        <nav className="nav-links">
          <a href="#section1">Section 1</a>
          <a href="#section2">Section 2</a>
          <a href="#section3">Section 3</a>
          <a href="#section4">Section 4</a>
        </nav>
      </div>

      {/* Right Content Area */}
      <div className="content-area">
        {/* Sections with Text and Images */}
        <section id="section1" className="content-section">
          <h2>Section 1</h2>
          <p>
            content area text here
          </p>
          <img src="/src/Images/sky-rainbow.jpeg" alt="Section 1" />
        </section>

        <section id="section2" className="content-section">
          <h2>Section 2</h2>
          <p>
            content 
          </p>
          <img src="/src/Images/sky-rainbow.jpeg" alt="Section 2" />
        </section>

        <section id="section3" className="content-section">
          <h2>Section 3</h2>
          <p>
            content 
          </p>
          <img src="/src/Images/sky-rainbow.jpeg" alt="Section 3" />
        </section>

        <section id="section4" className="content-section">
          <h2>Section 4</h2>
          <p>
            Curabitur vitae metus ac eros sagittis cursus nec eu lectus. Mauris congue dapibus purus.
          </p>
          <img src="/src/Images/sky-rainbow.jpeg" alt="Section 4" />
        </section>
      </div>
    </div>
  );
};

export default ScrollablePage;
