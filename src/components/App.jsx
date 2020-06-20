import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../util/fontawesome/css/all.css';
import Contacts from './Contacts';
import { Route, BrowserRouter } from 'react-router-dom';
import AddContact from './AddContact';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header
            brand="Contacts"
            home={<i className="fas fa-home"> Home</i>}
            contact={<i className="fas fa-user "> Add Contact</i>}
            about={<i className="fas fa-question "> About</i>}
            login="Login using google"
          />
        </div>
        <div className="container">
          <Route exact path="/" component={Contacts} />
          <Route exact path="/addcontact" component={AddContact} />
          <Route exact path="/about/:app" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
