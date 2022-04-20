import React from "react";  
import { useEffect, useContext } from "react"; 
import AddNewTodo from "./AddNewTodo";
import { TodoListContext } from "../contexts/TodoListContext";
import "../styles/Todolist.css"; 
import "../styles/removeButton/removeButton.css"

const TodoList = () =>{ 

    const {todos, addTodo, removeTodo} = useContext(TodoListContext)

     useEffect(() =>{
        console.log('use effect ', todos)
    }, [todos]); 

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        removeTodo(id);
    }

    return(
        <div className="TodoList">
            { <AddNewTodo addTodo={addTodo} /> }

            {
                todos.length ? (
                    todos.map((todo) => { 
                        return(
                            <table key={todo.id} className="ui celled table">
                                <tbody>
                                        <tr>
                                            <td>
                                                <p className="singleTodo" id = {todo.id} key={todo.id}> {todo.text} </p> 
                                            </td>
                                            <td className="removeTd">
                                                <div id = {todo.id} onClick={handleRemoveTodo}> 
                                                REMOVE 
                                            </div>
                                            </td>
                                        </tr>                        
                                </tbody>
                            </table>
                        )                 
                    })
                ) : (
                    <div> You have no todos </div>
                )
            }             
        </div>
    )

};

export default TodoList;