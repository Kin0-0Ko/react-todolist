import React from 'react'
import { ITodo } from '../interfaces'

type TodoLIstProps = {
	todos: ITodo[],
	onToggle(id: number): void,
	onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoLIstProps> = ({todos, onRemove, onToggle}) => {

	if(todos.length === 0){
		return <p className="center">Nothing!</p>
	}

	const removeHandler = (e: React.MouseEvent, id: number) =>{
		e.preventDefault()
		onRemove(id)
	}

	return(
		<ul>
		{todos.map(todo => {
			const classes = ['todo'];
			if (todo.completed) {
				 classes.push('completed')
				}
			return (
			<li className={classes.join(' ')} key={todo.id}>
					<label>
						<input type="checkbox" onChange={onToggle.bind(null, todo.id)} checked={todo.completed} />
					<span>{todo.title}</span>
					<i onClick={e => removeHandler(e, todo.id)} className="material-icons red-text">delete</i>
				</label>
			</li>
			)
		})}

		</ul>
	)
}