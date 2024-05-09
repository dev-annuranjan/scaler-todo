import React, { memo } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { type Todo } from '@/types/todo'
import Xmark from '@/assets/x-mark.svg'

type TodoProps = {
    todo: Todo;
    handleToggle: (id: number) => void;
    handleDelete: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, handleToggle, handleDelete }) => {
    const toggleIsComplete: () => void = () => {
        handleToggle(todo.id);
    }

    const deleteTask: () => void = () => {
        handleDelete(todo.id);
    }

    return (
        <li
            key={todo.id}
            className='flex justify-between mx-auto my-2 px-4 py-2 bg-slate-100'>
            <div className="flex items-center space-x-2">
                <Checkbox id={`${todo.id}`} checked={todo.isCompleted} onCheckedChange={toggleIsComplete} className='todo-checkbox' />
                <label htmlFor={`${todo.id}`} className="text-sm font-normal leading-none peer-disabled:opacity-70" >
                    {todo.task}
                </label>
            </div>
            <span onClick={deleteTask}><img src={Xmark} className='w-6 h-6 align-text-middle' /></span>
        </li>);
}

export default memo(Todo);