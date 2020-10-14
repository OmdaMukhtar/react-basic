
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
    fetch = ()=>{
        this.props.dispatch(fetchTasks());
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
                                onClick={this.fetch} className="btn btn-primary mb-2 ml-2">Add todo
                            </button>
                        </div>
                        <div className="row" id="todo-container" >
                        <ul>
                                {
                                    this.props.task.tasks.map(task=>{
                                        return (
                                            <li key={task.id}>{task.title}</li>
                                        )
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