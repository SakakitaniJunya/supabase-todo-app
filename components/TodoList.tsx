import React from 'react'
import { useAddTodo } from '../Hooks/useAddTodo'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


export const TodoList : React.FC = () =>  {
    const {todos} = useAddTodo()
    return (
        <>
        <div>TodoList</div>

            {todos.map((todo) => (
                <Card className="bg-gray-800 rounded-lg w-48">
                    <CardContent className="bg-gray-800">
                        <Typography className="text-gray-200 items-center ">
                          {todo.title}
                        </Typography>
                    </CardContent>
                </Card>

            ))}

        </>
    )
}
