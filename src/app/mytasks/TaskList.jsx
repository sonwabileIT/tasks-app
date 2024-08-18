
async function getTasks(){
    const data = await fetch("http://localhost:4000/tasks", {
        next: {
            revalidate: 0
        }
    })

    const res = await data.json()

    return res
}

async function TaskList(){

    const tasks = await getTasks()
    
    
    return(
        <>
        <div className="flex justify-center">
            <ul className="flex flex-col gap-2 max-w-screen-sm px-4 md:px-0">
                

                {tasks.map((task) => (
                <li key={task.id} className="bg-orange-300 rounded-md p-4">
                    <div className="flex justify-between items-center  mb-4">
                        <h2 className="text-2xl">{task.taskname}</h2>
                        <button className=" bg-cyan-300 rounded-full p-2">{task.isComplete ? 'Complete' : 'Incomplete'}</button>
                    </div>
                    <p>{task.taskdescription.slice(0, 200)}...</p>
                </li>
                ))}
            </ul>
        </div>
        
        </>
    )
}

export default TaskList