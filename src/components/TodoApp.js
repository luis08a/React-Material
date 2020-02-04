import React from 'react';
import moment from "moment";
import DatePicker from 'react-datepicker';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import { TodoList } from './TodoList';

export class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { items: [], text: '', priority: 0, dueDate: moment() };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>New TODO</h3>
                    <label htmlFor="text" className="right-margin">
                        Text:
                    </label>

                    <input
                        id="text"
                        name="text"
                        onChange={this.handleChange}
                        value={this.state.text}>
                    </input>

                    <br />
                    <br />
                    <label htmlFor="priority" className="right-margin">
                        Priority:
                    </label>

                    <input
                        id="priority"
                        type="number"
                        name="priority"
                        onChange={this.handleChange}
                        value={this.state.priority}>
                    </input>
                    <br />
                    <br />

                    <TextField
                        id="due-date"
                        label="Due date"
                        name="dueDate"
                        type="date"
                        defaultValue={this.state.dueDate}
                        onChange={this.handleChange}
                        // className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />
                    <Button variant="outlined" color="primary">
                        Add #{this.state.items.length + 1}
                    </Button>
                </form>
                <br />
                <br />
                <TodoList todoList={this.state.items} />
            </div>
        )
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;
        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: moment()
        }));
    }
}