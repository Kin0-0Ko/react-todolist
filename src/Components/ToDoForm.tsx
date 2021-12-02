
import React, {  useRef } from 'react';

interface TodoFromProps {
	onAdd(title: string): void
}


const Form: React.FC<TodoFromProps> = (props) => {
	// const [title, setTitle] = useState<string>('');
	// const changeHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setTitle(e.target.value)
	// }
	const ref = useRef<HTMLInputElement>(null)

	const keyPressHandler = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter'){
			// console.log(title)
			// setTitle('')
			props.onAdd(ref.current!.value)
			ref.current!.value = ''
		}
	}

	return <div className="input-field mt-2">
		<input 
		onKeyPress={keyPressHandler}
		// onChange={changeHendler} 
		ref={ref}
		// value={title}
		type="text" 
		id="title" 
		placeholder="Type what to do"
		/>
		<label htmlFor="title" className="active">Type what to do</label>
	</div>


}

export default Form;