import React, { Component } from 'react';
import { uuid } from 'uuidv4';

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

    addTodo(){
        //TODO
    }

    deleteTodo(){
        //TODO
    }

    render() { 
        return (
            <div className='TodoList'>
                {this.state.todos.map(todo =>
                    <Todo />
                )}
                <AddTodoForm />
            </div>
        );
    }
}
 
export default TodoList;