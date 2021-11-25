import React from 'react';
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import Navbar from './Components/NavBar'
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';


function App() {
	
  return <BrowserRouter>
	<header>
		<Navbar/>
	</header>
	<div className="container">
		<Routes>
			  <Route element={<TodosPage/>} path="/" />
			  <Route element={<AboutPage/>} path="/about"/>
		</Routes>
	</div>
  
  </BrowserRouter>
}

export default App;
