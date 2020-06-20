import React from 'react';

class Contact extends React.Component {
  state = {
    toggleBtn: false,
  };

  showOnClick = () => {
    this.setState((state) => ({
      toggleBtn: !state.toggleBtn,
    }));
  };

  delOnClick = () => {
    this.props.delOnClick();
  };
  render() {
    const { name, email, phone } = this.props;
    const { toggleBtn } = this.state;

    return (
      <div className="card my-2 p-2">
        <h3 className="card-title text-primary ">
          <i className="fas fa-user-tie"> </i>{' '}
          <span
            style={{ cursor: 'pointer', userSelect: 'none' }}
            onClick={this.showOnClick}
          >
            {name}{' '}
            <i
              className={toggleBtn ? 'fas fa-angle-down' : 'fas fa-angle-up'}
            ></i>
          </span>
          <i
            onClick={this.delOnClick}
            className="fas fa-trash-alt float-right  btn btn-outline-danger"
          ></i>
        </h3>
        {toggleBtn ? (
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Email: </strong>
              {email}
            </li>
            <li className="list-group-item">
              <strong>Phone: </strong>
              {phone}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
