
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import {connect} from 'react-redux';

import {fetchTasks} from '../actions/taskActions';
import '../components/style.css';

const mapStateToProps = state =>{
    return {
        task: state.task,
        user: state.user
    }
};

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchTasks: () => dispatch(fetchTasks)
//     }
// }

class App extends React.Component
{
    state = {
        value: ''
    };

    fetch = ()=>{
        this.props.dispatch(fetchTasks());
    }
    
    componentDidMount(){
        this.props.dispatch(fetchTasks());
    }

    drawTodo = (todo)=> {
        var newTodoHTML =`
        <div className="col col-12 p-2 todo-item" todo-id="{todo.id}">
        <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input type="checkbox" onchange="TodoChecked({todo.id})" aria-label="Checkbox for following text input" {todo.completed&&"checked"} >
          </div>
        </div>
        <input type="text" readonly className="form-control {todo.completed&&"todo-done"} " aria-label="Text input with checkbox"
          value="{todo.title}">
        <div className="input-group-append">
          <button todo-id="{todo.id}" className="btn btn-outline-secondary bg-danger text-white" type="button" onclick="DeleteTodo(this);"
            id="button-addon2 ">X</button>
        </div>
        </div>
        </div>
        `;

        return newTodoHTML;
    }

    onchange = (e)=>{
        console.log(e.target.value);
        this.setState({value: e.target.value});
    }

    render() { 
        console.log(this.props);
        return ( 
            <div className="container">
                <div className="row justify-content-center align-items-center main-row">
                    <div className="col shadow main-col bg-white">
                        <div className="row bg-primary text-white">
                            <div className="col p-2">
                                <h4>Todo App</h4>
                            </div>
                        </div>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2">
                                <input id="todo-input" type="text" className="form-control" value="" />
                            </div>
                            <button type="button" 
                                 className="btn btn-primary mb-2 ml-2">Add todo
                            </button>
                        </div>
                        <div className="row" id="todo-container" >
                        <ul>
                                {
                                    this.props.task.tasks.map(todo=>{
                                        return (
                                            <div className="col col-12 p-2 todo-item" key={todo.id}>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input" 
                                                            value={this.state.value}  onChange={onchange}/>
                                                    </div>
                                                    </div>
                                                    <input type="text" readOnly className="form-control " 
                                                        value={todo.title} />
                                                    <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary bg-danger text-white" type="button" 
                                                        id="button-addon2 ">X</button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(App);