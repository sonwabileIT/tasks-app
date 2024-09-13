
import { CompleteButton } from "../components/CompleteButton"
import DeleteTaskButton from "../components/DeleteTaskButton"
import Task from "../components/Task"


async function getAllTasks(){
    const data = await fetch("http://localhost:4000/tasks", {
        next: {
            revalidate: 0
        }
    })

    const res = await data.json()

    return res
}

// async function getTaskById(id){
//     const data = await fetch("http://localhost:4000/tasks/" + id)
//     const result = await data.json()
//     return result
// }

// const markComplete = async (id) => {
//     const task = await fetch(`http://localhost:4000/tasks/${id}`);
//     const result = await task.json()
//     return console.log("From markComplete function. ", id, result);
// }


async function TaskList(){

    const tasks = await getAllTasks()
    
    
    
    return(
        <>
        <div className="flex justify-center">
            <ul className="flex flex-col gap-2 max-w-screen-sm px-4 md:px-0">
                {tasks.map((task) => (
                <Task key={task.id} id={task.id} taskname={task.taskname} taskdescription={task.taskdescription} isComplete={task.isComplete} />
                ))}
            </ul>
        </div>
        
        </>
    )
}

export default TaskList