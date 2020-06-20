import React from 'react';

class AddContact extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  renderElm = () => {
    const { name, email, phone } = this.state;
    return (
      <form className="card m-2 ">
        <h3 className="card-title bg-light p-2">Add Contact</h3>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter Name..."
              onChange={(e) => this.setState({ name: e.target.value })}
              defaultValue={name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter Email..."
              onChange={(e) => this.setState({ email: e.target.value })}
              defaultValue={email}
            />
          </div>

          <div className="form-group ">
            <label htmlFor="phone">phone number: </label>
            <input
              name="phone"
              type="number"
              className="form-control"
              placeholder="Enter phone number..."
              onChange={(e) => this.setState({ phone: e.target.value })}
              defaultValue={phone}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    );
  };
  render() {
    return <div>{this.renderElm()}</div>;
  }
}

export default AddContact;
