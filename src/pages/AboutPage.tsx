import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
	const history = useNavigate()
	return(<>
	<h1>Info</h1>
	<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, aliquam.</p>
	<button className="btn" onClick={() => history('/')}> Come to todos</button>
	</>)
}