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

    const {todos, addTodo} = useContext(TodoListContext)

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

    return(
        <div>
            <ul>
                {todos.map((todo) => { 
                    return(
                        <>
                        <li key={todo.id}> {todo.text} </li> 
                        <p> Remove ToDo </p>
                        </>
                    )                 
                })}
            </ul> 
            { <AddNewTodo addTodo={addTodo} /> }
        </div>
    )

};

export default TodoList;