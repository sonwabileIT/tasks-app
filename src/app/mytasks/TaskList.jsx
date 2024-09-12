
import { CompleteButton } from "../components/CompleteButton"
import DeleteTaskButton from "../components/DeleteTaskButton"


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
                <li key={task.id} className="bg-orange-300 rounded-md p-4">
                    <div className="flex justify-between items-center  mb-4">
                        <h2 className="text-2xl">{task.taskname}</h2>
                        <div className="flex gap-2">
                            <CompleteButton id={task.id} children={task.isComplete ? 'Complete' : 'Incomplete'} ></CompleteButton>
                            <DeleteTaskButton id={task.id}></DeleteTaskButton>
                        </div>
                    </div>
                    <p>{task.taskdescription}</p>
                </li>
                ))}
            </ul>
        </div>
        
        </>
    )
}

export default TaskList