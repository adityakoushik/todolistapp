import './App.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Todos } from './Components/Todos';
import React, { useState } from 'react';
import { AddTodo } from './Components/AddTodo';

function App() {
  const onDelete = (todo) => {
    console.log("Deleted", todo);

    setTodos(todos.filter((e)=>{
      return e !== todo;
    }))
  }
  // Below code is for useState Hooks
  // const [state, setstate] = useState(initialState)
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "Market jao"
    },
    {
      sno: 2,
      title: "Go to the shop",
      desc: "vai tum shop jao"
    },
    {
      sno: 3,
      title: "Go to the Mall",
      desc: "Mall se Fresh Mutton lana"
    },
  ])
  return (
    <>
      <Header title="Codekree Solution" searchBar={false}/>
      <AddTodo />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
