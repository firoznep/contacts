import React from 'react';

const About = (props) => {
  return (
    <div>
      <h3>About</h3>
      {props.match.params.app}
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse soluta
        eligendi cum laudantium dolor omnis, qui quod id explicabo consectetur,
        quae, atque sequi asperiores voluptas dolorum consequatur dolorem vero
        expedita.
      </p>
      <div>
        <span>
          Verson: <strong>1.0.0</strong>
        </span>
      </div>
    </div>
  );
};

export default About;
