import DeleteAllTasksButton from "../components/DeleteAllTasksButton"
import Task from "../components/Task"


async function getAllTasks(){
    try{
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, {
            next: {
                revalidate: 0
            },
            headers:{'Content-Type':'application/json'},
            method: 'GET'
        })
    
        const res = await data.json()
        return res
    }
    catch(err){
        console.log('Error message: ', err);
        return []
    }
    
}


async function TaskList(){

    const tasks = await getAllTasks()

    return(
        <>
        <div className="flex justify-center">
                <ul className="flex flex-col gap-2 max-w-screen-sm px-4 md:px-0">
                    {tasks.length === 0 ? 
                    <div className="bg-orange-100 rounded-md p-4 border border-orange-500  text-orange-600 ">
                        The tasklists is empty
                    </div> :
                    tasks.map((task) => (
                    <Task key={task.id} id={task.id} taskname={task.taskname} taskdescription={task.taskdescription} isComplete={task.isComplete} />
                    ))}
                </ul>
        </div>

        <div className="flex justify-center mt-4">
            <DeleteAllTasksButton></DeleteAllTasksButton>
        </div>
        </>
    )
}

export default TaskList