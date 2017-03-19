import React, { Component } from 'react';
import logo from './logo.svg';
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
    deleteTodo(index,event){
        delete this.state.todoList[index];
        this.setState({
            todoList : this.state.todoList
        })
    }

    getList(arr) {
        return (
            arr.map((item, index) => {
                return <tr key={index} >
                            <td>{item.todo} </td>
                            <td>{item.time} </td>
                            <td><button onClick={this.deleteTodo.bind(this,index)}>Delete</button></td>

                        </tr>

            })
        )
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
           <table style={this.state.todoList.length === 0 ? { display: 'none' } : {} }>
               <thead>
                   <tr>
                       <th>Todo</th>
                       <th>Time</th>
                       <th>Delete</th>
                   </tr>
               </thead>
               <tbody>
                   {this.getList(this.state.todoList)}
               </tbody>
           </table>
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
