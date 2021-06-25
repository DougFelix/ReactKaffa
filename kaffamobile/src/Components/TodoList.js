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
        let Todo = {...newTodo, id: uuidv4()}
        let updateList = [...this.state.todos, Todo]
        this.setState({
            todos: updateList
        })
    }

    deleteTodo(){
        //TODO
    }

    render() { 
        return (
            <div className='TodoList'>
                {this.state.todos.map(todo =>
                    <Todo key={todo.id} data={todo}/>
                )}
                <AddTodoForm addTodo={this.addTodo} />
            </div>
        );
    }
}
 
export default TodoList;