import React from 'react'
import { useAddTodo } from '../Hooks/useAddTodo'

export const TodoList : React.FC = () =>  {
    const {todos} = useAddTodo()

    return (
        <>
        <div>TodoList</div>
        {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
        ))}
        </>
    )
}
