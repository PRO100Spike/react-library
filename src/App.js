import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Header from './layout/Header'
import About from "./view/About";
import Contact from "./view/Contact";
import Home from "./view/Home";
import Library from "./view/Library";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
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
