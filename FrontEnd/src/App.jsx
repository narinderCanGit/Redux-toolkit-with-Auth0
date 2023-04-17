import React from "react";
import AddTask from "./components/AddTask";
import AddTaskClass from "./components/AddTaskClass";
import Tasks from "./components/Tasks";
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div>
            <Navbar/>
            <AddTaskClass />
            <Tasks />
        </div>
    );
};

export default App;
