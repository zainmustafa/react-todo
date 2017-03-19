import React, { Component } from 'react';
import logo from './logo.svg';
import ViewTodo from './ViewTodo'
import './App.css';

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


  render() {


    return (
      <div className="App">
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Todo</h2>
        </div>
        <p className="App-intro">
            React Todo App with basic features.
        </p>
        <div>
            <ViewTodo todoList={this.state.todoList} />
            <form onSubmit={this.addTodo.bind(this)}>
                <input type="text" placeholder="Enter Todo"
                       onChange={this.onChangeInput.bind(this)}
                       value={this.state.todo}/>
                <button type="button" onClick={this.addTodo.bind(this)} disabled={!this.state.todo}>Add</button>
            </form>
        </div>

      </div>
    );
  }
}

export default App;
