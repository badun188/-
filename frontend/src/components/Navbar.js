import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({ user, setUser }) => {
  const history = useHistory();

  const handleLogout = async () => {
    await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
    setUser(null);
    history.push('/login');
  };

  return (
    <nav>
      <div className="logo">公司Logo</div>
      <div className="company-name">公司名称</div>
      {user && (
        <div className="user-info">
          <span>{user.username} ({user.role})</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/import">Import</Link>
        <Link to="/results">Results</Link>
      </div>
    </nav>
  );
};

export default Navbar;