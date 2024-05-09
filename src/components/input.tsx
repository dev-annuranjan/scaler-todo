import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type InputProps = {
    input: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleAdd: () => void;
}

const InputBox: React.FC<InputProps> = ({ input, handleInputChange, handleInputKeyDown, handleAdd }: InputProps) => {
    return (
        <div className='flex gap-4'>
            <Input
                value={input}
                type="text"
                placeholder='Type your task here...'
                autoFocus
                className='sm:min-w-40'
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            />
            <Button
                onClick={handleAdd}
                disabled={input.length === 0}>Add Task</Button>
        </div>
    )
}

export default InputBox;

