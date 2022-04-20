import React, {createContext, useState} from 'react'; 

export const TodoListContext = createContext(); 

const TodoListContextProvider = ({children}) => { 

    const [id, setId] = useState(2);

    const addTodo = (text) => {
        setTodos([
            ...todos, 
            {text, id}
        ]);
        console.log(id);
        setId(id + 1);
    };

    const [todos, setTodos] = useState([
        {text: 'EXAMPLE TODO' , id: 1},
    ]); 

    const removeTodo =  (id) => {
        setTodos(todos.filter((todo)=>{
            return todo.id !== Number(id);
        }));
    };

    return(
        <TodoListContext.Provider value={{todos, addTodo, removeTodo}}>
            {children}
        </TodoListContext.Provider>
    )   
};

export default TodoListContextProvider;