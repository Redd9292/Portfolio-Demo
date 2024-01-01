import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import MeImage from '../images/Me.jpg';
import './home.css';

function About() {
  const [about, setAbout] = useState(null);
  const [rotationClass, setRotationClass] = useState('cd-rotate-1-out'); // Initial class

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();

    // Set interval to update the rotation class every 500 milliseconds
    const intervalId = setInterval(() => {
      // Toggle between rotation classes
      setRotationClass((prevClass) =>
        prevClass === 'cd-rotate-1-out' ? 'cd-rotate-2-out' : 'cd-rotate-1-out'
      );
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const loaded = () => (
    <div className="flex items-center justify-between">
      <img src={MeImage} alt="Me" className="mt-4 order-1 mr-4 max-w-full round-lg" width="400" />

      <div className="text-center pr-8 order-2">
        <h1>
          Gilbert <span className="text-red-500">Espinoza</span>
        </h1>
        <h2 className='text-2xl'>
          <span className="text-gray-500">Full-Stack</span>{' '} <span className={rotationClass}>Developer</span>
        </h2>

       {/* Thicker and bigger dotted line with margin */}
       <div className="border-b border-line border-gray-500 my-8 w-3/4 border-t mx-auto"></div>



        <p className="text-sm pb-4 leading-6">
          I’m a Software Engineer passionate about leveraging my skills to solve complex problems and create innovative solutions. My experience includes working with a variety of programming languages and frameworks, and I’m always eager to learn more. I thrive in a collaborative environment and am committed to continuous learning and growth in this dynamic field. I'm excited to bring my dedication and technical skills to a forward-thinking company where I can contribute to challenging projects.
        </p>

 {/* Button to navigate to the About page */}
 <Link to="/projects">
        <button className="bg-red-500 text-white px-4 py-2 mt-4">Portfolio</button>
      </Link>




        {/* <h2>{about.name}</h2>
        <h3>{about.email}</h3> */}

  
      </div>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;