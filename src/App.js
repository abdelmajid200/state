import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [person, ] = useState({
    fullName: 'John Doe',
    bio: 'A passionate developer',
    imgSrc: 'profile.jpeg',
    profession: 'Software Engineer'
  });
  const [shows, setShows] = useState(false);
  const [mountedTime, setMountedTime] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setMountedTime((prevTime) => prevTime + 1);
    }, 1000);


    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      
      {shows && (
        <div>
          <img src={person.imgSrc} alt='' />
          <h2>{person.fullName}</h2>
          <p>{person.bio}</p>
          <h3>{person.profession}</h3>
        </div>
      )}
      
      <p>Component mounted {mountedTime} seconds ago.</p>
      <button onClick={() => setShows(!shows)}>
        {shows ? 'Hide Profile' : 'Show Profile'}
      </button>
    </div>
  );
}

export default App;
