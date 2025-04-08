import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the AI Demo</h1>
      <Link to="/import" className="button">Import Project List</Link>
      <Link to="/results" className="button">View Results</Link>
    </div>
  );
};

export default Home;