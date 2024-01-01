import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home(props) {
  const [rotationClass, setRotationClass] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotationClass('cd-rotate-1-out');
      setTimeout(() => setRotationClass(''), 400); // Reset the class after 500 milliseconds
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <h1>
        Gilbert <span className="text-red-500">Espinoza</span>
      </h1>
      <h2 className='text-2xl'>
        <span className="text-gray-500">Full-stack</span>{' '} <span className={rotationClass}>Developer</span>
      </h2>
      
      {/* Button to navigate to the About page */}
      <Link to="/about">
        <button className="bg-red-500 text-white px-4 py-2 mt-4">Learn More</button>
      </Link>
    </div>
  );
}

export default Home;

