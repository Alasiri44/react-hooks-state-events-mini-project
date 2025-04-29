import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState('All');

  // function to handle filtering
  function handleFilter(category) {
    setCategory(category)
  }

  useEffect(() => {
    const filteredTasks = TASKS.filter(task => {
      if (category === 'All') {
        return true;
      }
      return task.category === category
    })
    setTasks(filteredTasks)
  }, [category])

  // Setting a function to handle deletion of tasks
  function handleDelete(text) {
    const remainingTasks = tasks.filter(task => {
      return task.text !== text;
    })
    setTasks(remainingTasks);
  }

  // settig a function to handle adding tasks
  function HandleAddTasks(data){
    
    setTasks(tasks => [...tasks, data]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterFunction={handleFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={HandleAddTasks}/>
      <TaskList tasks={tasks} deleteFunction={handleDelete} />
    </div>
  );
}

export default App;
