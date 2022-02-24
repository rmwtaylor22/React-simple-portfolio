import React from 'react';

const About = () => {
  return (
    <div>
    <section className='my-28  px-5' id='About'>
      <header className='text-2xl font-bold pt-10 mb-5'>
        <h2>About Me</h2>
      </header>
      <div className='bio'>
          <div className='bio-image'><img src='../images/rose.jpg' alt='Rose White' float='left' 
            margin='5px'></img></div>
      <div>
      <p>Rose White is an about-to-be graduate of Taylor University, majoring in computer science and digital media. After college, she’ll be starting her career as a Technology Consultant at Credera in Dallas, TX. Leading up to now, she’s had several opportunities in her college career to grow her skills. </p>
      <br></br>
      <p>After freshman year, she worked as a Safety Contractor at Elanco creating automated Tableau data sheets and charts for the safety team. During the summer after her sophomore year, she landed an internship with Kratos Defense where she made many improvements, both in design and function, to the company’s existing software. Finally, she served as a Product Development Intern in Samaritan’s Purse’s global internship program during the summer of 2021. There, she contributed many full-stack additions to their upcoming donor management system. She also produced a functioning mobile UI version of their web app within 4 weeks. This opportunity, out of them all, reassured her passion for software development and gave her the confidence to pursue a full-stack development position full-time.</p>
      <br></br>
      <p>In addition to her summer internships, Rose has taken advantage of multiple opportunities at school to develop her leadership and mentoring skills, including being a computer science TA (2019-2021), managing the school satellite team (Spring 2020), and serving as an RA in her residence hall junior year. In the future, she hopes to find her niche in the vast world of software development, ideally settling in an area that allows her to utilize her creative edge along with her love for community and leadership.</p>
      <br></br>
      <p>When Rose isn't immersed in the world of software development, she loves to spend her time exploring nature, catching up with friends, trying out new restaurants, and occasionally convincing herself to sit down and read a good book.</p>
      </div>
      </div>
      </section>
    </div>
  );
};

export default About;
