import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Todos } from "./Components/Todos";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./Components/AddTodo";
import {About} from './Components/About'
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";

function App() {
	
	let initTodo;
	if(localStorage.getItem("todos") === null){
		initTodo = [];
	}else{
		initTodo = JSON.parse(localStorage.getItem("todos"))
	}

	const onDelete = (todo) => {
		console.log("Deleted", todo);

		setTodos(
		todos.filter((e) => {
			return e !== todo;
		})
		);
		// Now I am going to store todos in local storage which will be a browser session
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const addTodo = (title, desc) => {
		console.log("I am adding this todo", title, desc);
		let sno;
		if (todos.length == 0) {
		sno = 0;
		} else {
		sno = todos[todos.length - 1].sno + 1;
		}
		const myTodo = {
		sno: sno,
		title: title,
		desc: desc,
		};
		setTodos([...todos, myTodo]);
		console.log(myTodo);
	};

	// Below code is for useState Hooks
	// const [state, setstate] = useState(initialState)
	/**
	 * ---------This below code is for default todos list------
	 * const [todos, setTodos] = useState([
		{
		sno: 1,
		title: "Go to the market",
		desc: "Market jao",
		},
		{
		sno: 2,
		title: "Go to the shop",
		desc: "vai tum shop jao",
		},
		{
		sno: 3,
		title: "Go to the Mall",
		desc: "Mall se Fresh Mutton lana",
		},
		]);
	*/
  	const [todos, setTodos] = useState(initTodo);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos])
  	console.log("showing list of todos", todos);
	return (
		<>
			<Router>
				<Header title="Codekree Solution" searchBar={false} />

				<Switch>
					<Route exact path="/" render={() => {
						return(
							<>
								<AddTodo addTodo={addTodo} />
								<Todos todos={todos} onDelete={onDelete} />
							</>
						)
					}}>
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
