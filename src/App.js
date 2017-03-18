import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            todo : '',
            todoList : ["zain", "naqash", "owais", "zain"]
        }

    }
    onChangeInput(event){
        this.setState({
            todo : event.target.value
        });
    }
    addTodo (){

        let to = this.state.todoList;
        to.push(this.state.todo);
        this.setState({
            todoList : to
        })

    }

    getList(li) {
        return (
            li.map((item, index) => {
                return <li key={index}>{item}</li>
            })
        )
    }
  render() {


    return (
      <div className="App">
        <div className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <h2>Welcome to React </h2>
       </div>
       <p className="App-intro">
       To get started, edit <code>src/App.js</code> and save to reload.
       </p>
       <div>
       <ul>
           {this.getList(this.state.todoList)}
       </ul>
       <input type="text" placeholder="Enter Todo" value={this.todo} onChange={this.onChangeInput.bind(this)}/>
       <button type="button" onClick={this.addTodo.bind(this)}>Add</button>
       </div>

      </div>
    );
  }
}

export default App;
