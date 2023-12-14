import { useState, useEffect } from "react";

import githubLogo from '../images/Github.png'
import linkedIn from '../images/Linkedin.png'

function About() {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {

		// make api call and get response
    const response = await fetch("./about.json");

		// turn response into javascript object
    const data = await response.json();

		// set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getAboutData() } , []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    
    <div>
      <h1 className="text-sm pb-24"> I’m Software Engineer passionate about leveraging my skills to solve complex problems and create innovative solutions. My experience includes working with a variety of programming languages and frameworks, and I’m always eager to learn more. I thrive in collaborative environment and am committed to continuous learning and growth in this dynamic field. Im exited to bring my dedication and technical skills to a forward-thinking company where I can contribute to challenging projects.
</h1>

      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <a href="https://github.com/Redd9292" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub Logo" className="w-16 h-16" />
      </a>
      <a href="https://www.linkedin.com/in/gilbertoespinoza1/" target="_blank" rel="noopener noreferrer">
        <img src={linkedIn} alt="Linkedin Logo" className="w-16 h-16" />
      </a>
      <p>{about.bio}</p>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;