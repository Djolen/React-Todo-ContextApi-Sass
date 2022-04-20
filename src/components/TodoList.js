import React from "react";  
import { useState, useEffect, useContext } from "react"; 
import AddNewTodo from "./AddNewTodo";
import { TodoListContext } from "../contexts/TodoListContext";

const TodoList = () =>{ 

    /* const [id, setId] = useState(5); */

    /* const [todos,setTodos] = useState([
        {text: 'Pay bills' , id: 1},
        {text: 'Do your homework' , id: 2}, 
        {text: 'Walk your dog' , id: 3},
        {text: 'Go to school' , id: 4}
    ]); */ 

    const {todos, addTodo, removeTodo} = useContext(TodoListContext)

    /* const addTodo = (text) => {
        setTodos([
            ...todos, 
            {text , id}
        ])
        setId(id+1)
    }  */

     useEffect(() =>{
        console.log('use effect ', todos)
    }, [todos]); 

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        removeTodo(id);
    }

    return(
        <div>
            {todos.map((todo) => { 
                return(
                    <div key={todo.id}>
                        <p id = {todo.id} key={todo.id} className='item'> {todo.text} </p> 
                        <p id = {todo.id} onClick={handleRemoveTodo}> Remove todo </p>
                    </div>
                )                 
            })}

            { <AddNewTodo addTodo={addTodo} /> }
        </div>
    )

};

export default TodoList;