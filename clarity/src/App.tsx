import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Home from "./modules/pages/home";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
