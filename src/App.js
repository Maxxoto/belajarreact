import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

//Untuk import page lain
import CreateTodo from "./components/create-todo.component"
import EditTodo from "./components/edit-todo.component"
import TodosList from "./components/todos-list.component"

class App extends Component {
  render() {
    return (
        <Router>
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#" target="_blank">
                        <img src={logo} width="30" height="30" alt="Blank"/>
                    </a>
                    <Link to="/" className="navbar-brand"> MERN-Stack Todo App </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link"> Todos </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link"> Create Todo </Link>
                            </li>

                        </ul>
                    </div>
                </nav>

            </div>
            <Route path="/" exact component={TodosList} />
            <Route path="/edit/:id" component={EditTodo}/>
            <Route path="/create" component={CreateTodo}/>
        </Router>
    );
  }
}

export default App;
