import React, { useState } from 'react';
import { getTasks } from '../services/tasks';

const TodoList = () => {
    const [tasks, setTasks] = useState(getTasks());
    //tasks => variable that holds our state
    //setTasks => method used to update that state if you need to
    //getTasks() => method that getting data

    const [userInput, setUserInput] = useState('');
    const [searchInput, setSearchInput] = useState('');

    const [filter, setFilter] = useState(getTasks()); //setFilter to display filtered results
    
    let idCount = tasks.length;

    const handleDelete = (taskId) => {
        const deleteTasks = tasks.filter(task => task._id !== taskId);
        setTasks(deleteTasks);
        setFilter(deleteTasks);
    }

    // function handleSubmit(e){
    //     e.preventDefault();
    //     console.log("Submit");
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const addTask = (userInput) => {
            let copy = [...tasks];
            copy = [...copy, { _id: idCount + 1, currentTask: userInput }];
            idCount++;
            setTasks(copy);
            setFilter(copy);
        }
        addTask(userInput);
        setUserInput(""); // set the form back to an empty input
        console.log("Submit");
    }

    function handleChange(e) {
        // setUserInput({ _id: 5, currentTask: userInput });
        setUserInput(e.currentTarget.value);
        console.log(e.currentTarget.value);
        console.log("change");
    }

    const handeleSearch = (e) =>{
        // tasks 
        setSearchInput(e.currentTarget.value);
        const searchedTask = filter.filter((task) => task.currentTask.toLowerCase().includes(e.currentTarget.value));
        console.log(e.currentTarget.value);
        console.log(tasks);
        
        setTasks(searchedTask);
        //Make use of setFilter instead
       
    }

    return ( 
        <div className="container">
            <div id="main" className="card card-body">
                <div className="col-md-6 align-self-center">
                    <input type="text" onChange={handeleSearch} className="form-control" id="filter" placeholder="Search Tasks..." value={searchInput}/>
                </div>
                <h3 className="title">Add Tasks</h3>
                <form onSubmit={ handleSubmit }id="addForm" className="form-inline mb-3">
                    <input type="text" onChange={handleChange} className="form-control mr-2" id="task" value = {userInput}/>
                    <input type="submit" className="btn btn-dark" value="Add" />
                </form>

                <h2 className="title">Tasks</h2>
                {tasks.map((task) => (
                    <ul id="tasks" key={task._id} className="list-group">
                        <li className="list-group-item">{task.currentTask}<button onClick = {() => handleDelete(task._id)}className="btn btn-danger btn-sm float-right delete">X</button>
                        </li>
                    </ul>
                )
            )}
            </div>
        </div>
     );
}
export default TodoList;