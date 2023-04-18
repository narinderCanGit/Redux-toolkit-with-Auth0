import React from "react";
import AddTask from "./components/AddTask";
import AddTaskClass from "./components/AddTaskClass";
import Tasks from "./components/Tasks";
import Navbar from "./components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <Navbar />
      {isAuthenticated && (
        <>
          <AddTaskClass />
          <Tasks />
        </>
      )}
    </div>
  );
};

export default App;
