import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    constructor(){
        super();
        this.state = {
            username : '',
            password : ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    loginFunc (event){
        console.log("Got here",this.state);
        event.preventDefault();
    }


  render() {


    return (
    <div>

        <form onSubmit={this.loginFunc.bind(this)} name="loginForm">

            <input type="text" placeholder="Username" name="username"
                   onChange={this.handleInputChange}
                   value={this.state.username}/>

            <input type="password" placeholder="password" name="password"
                   onChange={this.handleInputChange}
                   value={this.state.password}/>

            <button type="submit" onClick={this.loginFunc.bind(this)}
                disabled={!this.state.username || !this.state.password}>Add</button>
        </form>
    </div>


    );
  }
}

export default Login;
