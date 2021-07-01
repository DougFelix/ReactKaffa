import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";

// components
import Todo from './Todo';
import AddTodoForm from './AddTodoForm';

// CSS
import './Styles/TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //MOUNT empty list or load from localstorage
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

    // Add new ToDo
    addTodo(newTodo){
        // Get the new task and give it an id
        let Todo = {...newTodo, id: uuidv4()}
        // Spread old tasks and add new one
        let updatedList = [...this.state.todos, Todo]
        // Update state and localStorage
        this.setState({
            todos: updatedList
        })
        localStorage.setItem('@mytodoslist', JSON.stringify(updatedList));
    }

    // Delete selected ToDo
    deleteTodo(idTodo){
        // Filter ToDo List excluding given ID
        let filteredTodoList = this.state.todos.filter(
            todo => todo.id !== idTodo
        );
        // Update state and localStorage
        this.setState({todos: filteredTodoList});
        localStorage.setItem('@mytodoslist', JSON.stringify(filteredTodoList));
    }

    render() { 
        return (
            <div className='TodoList'>
                <h1 className='TodoList-Title'>ToDo List</h1>
                <div>
                    { // Map state to create a component for each todo
                    this.state.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            data={todo}
                            deleteTodo={this.deleteTodo}
                        />
                    )}
                </div>
                <AddTodoForm addTodo={this.addTodo} />
            </div>
        );
    }
}
 
export default TodoList;