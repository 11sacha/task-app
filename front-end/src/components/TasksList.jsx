import { useEffect, useState } from "react";
import { getALLTasks } from "../api/tasks.api";
import TaskCard from "./TaskCard";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
        const res = await getALLTasks();
        setTasks(res.data);
    }
  }, [])

  return (
    <div>
        {tasks.map(task => (
            <TaskCard key={task.id} task={task}/>
        ))}
    </div>
  )
}

export default TasksList