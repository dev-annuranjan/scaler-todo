import { useEffect, useState } from 'react'

import './App.css'
import { type Todo as TodoType } from "@/types/todo"
import Todo from "@/components/todo"
import InputBox from './components/input'
import Joke from './components/joke'

function getTodosFromLocalStorage() {
  const stringifiedTodo = localStorage.getItem('todos');
  return stringifiedTodo ? JSON.parse(stringifiedTodo) : [];
}

function App() {
  const [todos, setTodos] = useState<TodoType[]>(getTodosFromLocalStorage());
  const [inputValue, setInputValue] = useState<string>("");
 
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddButtonClick();
    }
  }

  const handleAddButtonClick = () => {
    if (inputValue) {
      setTodos([...todos, { id: Date.now(), task: inputValue, isCompleted: false }]);
      setInputValue("");
    }
  }

  const handleTaskCheckToggle: (id: number) => void = (id) => {
    const idx = todos.findIndex(x => x.id === id);

    const newTodos = [...todos];
    newTodos[idx] = {
      ...newTodos[idx],
      isCompleted: !newTodos[idx].isCompleted
    }

    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  }

  const handleTaskDelete: (id: number) => void = (id) => {
    const newTodo = [];

    for (const todo of todos) {
      if (todo.id !== id) newTodo.push(todo)
    }
    setTodos(newTodo);
  }

  return (
    <div className='bg-gray-100 w-100% mx-auto my-0 p-8 text-center'>
      <main className='min-w-72 md:w-[600px] mx-auto'>
        <section className='my-6 bg-white p-4 min-h-24 border border-slate-700 rounded-sm shadow-md'>
          <Joke />
        </section>
        <div className='todo-scroll border border-slate-700 rounded-sm px-4 py-8 shadow-md bg-white h-[70lvh] overflow-y-auto'>
          <div>
            <section>
              <InputBox
                input={inputValue}
                handleInputChange={handleInputChange}
                handleInputKeyDown={handleInputKeyDown}
                handleAdd={handleAddButtonClick} />
            </section>
            <section className='mt-8'>
              <ul>
                {todos.map(todo =>
                  <Todo key={todo.id}
                    todo={todo}
                    handleDelete={handleTaskDelete}
                    handleToggle={handleTaskCheckToggle} />)}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
