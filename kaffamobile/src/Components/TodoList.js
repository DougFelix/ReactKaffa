import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";

// components
import Todo from './Todo';
import AddTodoForm from './AddTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.mount()
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    // Create new list of ToDos or load existing one
    mount(){
        let list = JSON.parse(localStorage.getItem('@mytodoslist') || '[]');
        return list;
    }

    addTodo(newTodo){
        let updateList = [...this.state.todos, newTodo]
        this.setState({
            todos: updateList
        })
        //TODO
    }

    deleteTodo(){
        //TODO
    }

    render() { 
        return (
            <div className='TodoList'>
                {this.state.todos.map(todo =>
                    <Todo key={uuidv4()} data={todo}/>
                )}
                <AddTodoForm addTodo={this.addTodo} />
            </div>
        );
    }
}
 
export default TodoList;