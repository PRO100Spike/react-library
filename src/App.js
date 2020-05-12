import React from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./view/About";
import Contact from "./view/Contact";
import Home from "./view/Home";
import Library from "./view/Library";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Привет реакт!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/contact">Контакты</Link>
            </li>
            <li>
              <Link to="/library">Библиотека</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/library" component={Library} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
