import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
      {name: 'Home', route: '/'},
      {name: 'About', route: '/about'},
      {name: 'Topics', route: '/topics'},
      ],
      activeMenuElement: '',
    }
    this.handleNavClick = this.handleNavClick.bind(this);
  }
  handleNavClick(menuElement) {
    this.setState({
      activeMenuElement: menuElement
    })
  }
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <ul className="list-group">
        {
          this.state.nav.map(item => {
            const className = (item.name === this.state.activeMenuElement)
            ? "list-group-item active"
            : "list-group-item";
            return (<Link to={ item.route } key ={ item.name} className = { className }
            onClick={() => this.handleNavClick(item.name) }>{ item.name }</Link>)
          })
        }
        </ul>
        <hr />
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/topics' component={ Topics } />

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
