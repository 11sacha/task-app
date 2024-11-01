import { useEffect, useState } from "react";
import { getALLTasks } from "../api/tasks.api";

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
            <div key={task.id}>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
            </div>
        ))}
    </div>
  )
}

export default TasksList