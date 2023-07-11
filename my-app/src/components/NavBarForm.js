import React, { Component } from 'react';
import css from './css/NavBarForm.module.css'

class NavBarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    // Toggle the isLoggedIn state
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h2>My Gallery Heading</h2>
        {this.state.isLoggedIn ? (
          <button onClick={this.handleClick}>Log out</button>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input type="text" />
            </label>
            <label>
              Password:
              <input type="password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )}
      </div>
    );
  }


}

export default NavBarForm;





