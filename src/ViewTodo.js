/**
 * Created by zainmustafa on 19/03/2017.
 */

import React, { Component } from 'react';
import './ViewTodo.css';

class ViewTodo extends Component {


    deleteTodo(index){
        this.props.todoList.splice(index,1);
        this.setState({
            todoList : this.props.todoList
        });
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
            <div>
                <table style={this.props.todoList.length === 0 ? { display: 'none' } : {} }>
                    <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Time</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.getList(this.props.todoList)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ViewTodo;
