import React, {createContext, useState} from 'react'; 

export const TodoListContext = createContext(); 

const TodoListContextProvider = ({children}) => { 

    const [id, setId] = useState(0);

    const addTodo = (text) => {
        setTodos([
            ...todos, 
            {text, id}
        ]);
        console.log(id);
        setId(id + 1);
    };

    const [todos, setTodos] = useState([
        {text: 'Pay bills' , id: 1},
        {text: 'Do your homework' , id: 2}, 
        {text: 'Walk your dog' , id: 3},
        {text: 'Go to school' , id: 4}
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