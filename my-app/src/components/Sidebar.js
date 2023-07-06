import React from 'react'

import css from './css/NavBarSimple.module.css'

class NavBarSimple extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            message : 'Hello Guest'
        };
    }


    handleClick() {
        this.setState({
            message: this.state.message === "Hello Guest" ? "Welcome back User" : "Hello Guest",
            
            
        },
        () => {
          console.log("new state", this.state.message);
        }
      );
    }

    render() {
        return (
            <div className = {css.NavBarSimple} >
                <h1>My Gallery</h1>
                <span></span>
                <button onClick={() => this.handleClick()}>{this.state.message}</button>
            </div>

        )
    }
}


export default NavBarSimple