import { useState, useCallback } from "react";
import Title from "../Use-Callback-Task/Title";
import Task from "../Use-Callback-Task/Task";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTask = useCallback(() => {
    setTasks((t) => [...t, "New Task"]);
  }, [tasks]);

  return (
    <div className="flex justify-center">
      <div className="button">
        <Task tasks={tasks} addTask={addTask} />
      </div>
      
      <div className="button">Count : {count}</div>

      <div className="button">
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default Parent;
