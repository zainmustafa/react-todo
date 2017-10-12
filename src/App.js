import React, { Component } from 'react';
import logo from './logo.svg';
import ViewTodo from './ViewTodo';
import Login from './login/Login';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {

    constructor(){
        super();
        this.state = {
            todo : '',
            time : '',
            todoList : []
        }
    }

    onChangeInput(event){
        let currentdate = new Date();
        let datetime = currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        this.setState({
            todo : event.target.value,
            time : datetime
        });
    }

    addTodo (event){
        if(this.state.todo){
            this.state.todoList.push({todo:this.state.todo, time : this.state.time});

            this.setState({
                todo : '',
                todoList : this.state.todoList
            });
        }
        event.preventDefault();
    }

    performLogin(user){
        console.log("User Data",user);
    }


  render() {


    return (
      <div className="App">
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Todo</h2>
        </div>
        <p className="App-intro">
            React Todo App (CR_D)
        </p>
        <div>
            <ViewTodo todoList={this.state.todoList} />
            <form onSubmit={this.addTodo.bind(this)}>
                <input type="text" placeholder="Enter Todo"
                       onChange={this.onChangeInput.bind(this)}
                       value={this.state.todo}/>
                <Button type="button" className="btn btn-primary" onClick={this.addTodo.bind(this)} disabled={!this.state.todo}>Add</Button>
            </form>
        </div>
          <div>
            <Login performLogin={this.performLogin.bind(this)}/>
          </div>

      </div>
    );
  }
}

export default App;
