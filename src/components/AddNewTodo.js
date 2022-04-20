import React from 'react'; 
import { useState } from 'react'; 


const AddNewTodo = ({addTodo}) => {  

    const [todos,setTodos] = useState(''); 

    const handleSubmit = (e) => { 
        e.preventDefault();
        addTodo(todos); 
        setTodos('');
    }

    return(
        <form onSubmit={handleSubmit}> 
        <div className="ui action input todo">
            <input type='text'  value={todos} placeholder='New Todo..' onChange={(e) => setTodos(e.target.value)} /> 
            <button className="ui button" type='submit' > INSERT </button>
        </div>
        </form>
    )
}


export default AddNewTodo;