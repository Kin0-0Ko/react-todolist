import React, { useState, useEffect } from 'react';
import FormToDo from '../Components/ToDoForm'
import { TodoList } from '../Components/todoList';
import { ITodo } from '../interfaces';


export const TodosPage: React.FC = props => {
	
	const [todos, setTodos] = useState<ITodo[]>([])

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]

		setTodos(saved)
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const addHandler = (title: string) => {
		const newTodo: ITodo = {
			title: title,
			id: Date.now(),
			completed: false
		}
		// setTodos([newTodo, ...todos])
		setTodos(prev => [newTodo, ...prev])
	}

	const toggleHandler = (id: number) => {
		setTodos(prev =>
			prev.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed
					}
				}
				return todo
			}))
	}
	const delHandler = (id: number) => {
		const rem = window.confirm('Are you sure?')
		if (rem) {
			setTodos(prev => prev.filter(todo => todo.id !== id))
		}
	}

	return (
		<>
		<FormToDo onAdd={addHandler}/>
		  <TodoList todos={todos} onRemove={delHandler} onToggle={toggleHandler}/>

		</>
	)
}