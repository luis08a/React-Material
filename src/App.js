import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// Custom components
import { Login } from './components/Login';
import { TodoApp } from './components/TodoApp';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggenIn: false
        }

        localStorage.setItem('Luis', 'pasword');
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
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        {this.state.isLoggenIn && <li><Link to="/todo">Todo</Link></li>}
                    </ul>
                    <div>
                        <Route exact path="/" component={this.LoginView} />
                        {this.state.isLoggenIn && <Route path="/todo" component={this.TodoAppView} />}
                    </div>
                </div>
            </Router>
        );
    }

    LoginView = () => {
        return <Login />
    }
    TodoAppView = () => {
        return <TodoApp />
    }
    LogIn = () => {

    }
}

export default App;
