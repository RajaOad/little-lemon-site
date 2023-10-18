import React from 'react';

const About = () => {
  return (
    <section className='about-sec'>
    <div className="about-container">
      <div className="left-content">
        <h2 className='sec-title'>Little Lemon</h2>
        <h3 className='sub-title'>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius accumsan auctor. Donec in dapibus libero, in laoreet justo. Nunc feugiat ligula nec lorem faucibus, ac scelerisque odio vestibulum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius accumsan auctor. Donec in dapibus libero, in laoreet justo. Nunc feugiat ligula nec lorem faucibus, ac scelerisque odio vestibulum.
        </p>
      </div>
      <div className="right-content">
        <div className="aboutimg-container">
          <img src="../../about1.jpg" alt="about1" className="about-image" />
          <img src="../../about2.jpg" alt="about2" className="absolute-image" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
