import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// Custom components
import { Login } from './components/Login';
import { TodoApp } from './components/TodoApp';


localStorage.setItem('user', 'password');

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: localStorage.getItem("isLoggedIn")
        }
    }

    render() {
        
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br />
                    <br />
                    <div>
                        <Route exact path="/" component={(this.state.isLoggedIn == 'true' ? this.TodoAppView : this.LoginView)} />
                    </div>
                </div>
            </Router>
        );
    }

    LoginView = () => {
        return <Login handleLogin={this.LogIn} />
    }
    TodoAppView = () => {
        return <TodoApp />
    }
    LogIn = (e) => {
        let em = document.querySelector('#email').value
        let pwd = document.querySelector('#password').value

        if (localStorage.getItem(em) === pwd){
            localStorage.setItem("isLoggedIn", true);
            this.setState({ isLoggedIn: true });
            window.location.href="/"
        }
        else{
            return
        }
        
        console.log(localStorage.getItem("isLoggedIn"));
        
        
    }
}

export default App;
