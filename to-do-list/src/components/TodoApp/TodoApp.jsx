/* Hooks */
import { useState } from "react";

/* Components */
import Todo from "../Todo/Todo";

/* Css */
import './TodoApp.css';

const TodoApp = () => {
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;

        setTitle(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false,
        };

        const temp = [...todos];
        temp.unshift(newTodo);

        setTitle('');
    }

    function handleUpdate(id, value) {
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id) {
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp)
    }

  return (
    <div className='todoContainer'>
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" type="text" value={title}/>
            <input onClick={handleSubmit} className="buttonCreate" type="submit" value='Create todo' />
        </form>

        <div className="todosContainer">
            {
                todos.map(item => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))
            }
        </div>
    </div>
  )
}

export default TodoApp;