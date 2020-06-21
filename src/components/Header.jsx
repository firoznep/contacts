import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ brand, home, contact, login, about }) => {
  return (
    <nav className="navbar bg-primary">
      <span className="navbar-brand">{brand}</span>
      <ul className="nav mr-auto">
        <li className="nav-item ">
          <Link to="/contacts" className="nav-link btn text-light">
            {home}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addcontact" className="nav-link btn text-light ">
            {contact}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about/app" className="nav-link btn text-light">
            {about}
          </Link>
        </li>
      </ul>

      <div>
        <button className="btn btn-success">{login}</button>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  login: 'Login',
};

Header.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Header;
