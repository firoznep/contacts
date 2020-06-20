import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => this.setState({ persons: user }));
  }

  delContact = (id) => {
    const confirm = window.confirm('Are you sure want to delete ?');
    if (confirm) {
      const persons = this.state.persons.filter((person) => person.id !== id);
      this.setState({ persons });
    }
    return;
  };

  RenderUsers = () => {
    return this.state.persons.map((person) => {
      return (
        <Contact
          key={person.id}
          name={person.name}
          email={person.email}
          phone={person.phone}
          delOnClick={this.delContact.bind(this, person.id)}
        />
      );
    });
  };

  render() {
    return <div>{this.RenderUsers()}</div>;
  }
}

export default Contacts;
