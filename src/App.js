import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            todo : '',
            todoList : [{todo:'Zain'},{todo:'Zain'},{todo:'Zain'}]
        }
    }

    onChangeInput(event){
        this.setState({
            todo : event.target.value
        });
    }

    addTodo (event){
        this.state.todoList.push({todo:this.state.todo});

        this.setState({
            todo : '',
            todoList : this.state.todoList
        });
        event.preventDefault();
    }
    deleteTodo(index,event){
        delete this.state.todoList[index];
        this.setState({
            todoList : this.state.todoList
        })
    }

    getList(arr) {
        return (
            arr.map((item, index) => {
                return <div key={index}>
                            <li >{item.todo}</li>
                            <button onClick={this.deleteTodo.bind(this,index)}>Delete</button>
                        </div>

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
            <form onSubmit={this.addTodo.bind(this)}>
                <input type="text" placeholder="Enter Todo"
                       onChange={this.onChangeInput.bind(this)}
                       value={this.state.todo}/>
                <button type="button" onClick={this.addTodo.bind(this)}>Add</button>
            </form>
        </div>

      </div>
    );
  }
}

export default App;
