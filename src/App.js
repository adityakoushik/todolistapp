import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Todos } from './Components/Todos';

function App() {
  let todos = [
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
  ]
  return (
    <>
      <Header title="Codekree Solution" searchBar={false}/>
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
