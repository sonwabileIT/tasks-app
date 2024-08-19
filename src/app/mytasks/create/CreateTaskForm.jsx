"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

function CreateTaskForm(){

    const [taskname, setTaskName] = useState('');
    const [taskdescription, setTaskDescription] = useState('');
    const router = useRouter();

    async function submit(e){

        e.preventDefault()

        //object
        const task = {
            taskname, taskdescription, isComplete: false
        }

        if(taskname !== '' && taskdescription !== ''){
            const result = await fetch('http://localhost:4000/tasks', {
                method: "POST",
                body: JSON.stringify(task),
                headers: {"Content-Type": "application/json"}
            })
    
            if(result.status === 201){
                router.refresh()
                router.push('/mytasks')
            }
        }
        

        
    }
    

    return(
        <>
        <form onSubmit={submit} className="max-w-screen-sm mx-auto p-5">
            <div>
                <div className="flex flex-col mb-6">
                    <label className="my-2">Task Name</label>
                    <input type="text" placeholder="Write task name..." onChange={(e) => setTaskName(e.target.value)} value={taskname} className="p-2 rounded-md border-2 border-slate-700"/>
                    {/* <p>{taskname}</p> */}
                </div>
                <div className="flex flex-col mb-6">
                    <label className="my-2">Task Description</label>
                    <textarea rows="4" placeholder="Write don your tasks..."   onChange={(e) => setTaskDescription(e.target.value)} value={taskdescription} className="p-2 rounded-md border-2 border-slate-700" />
                    {/* <p>{taskdescription}</p> */}
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-orange-400 rounded-sm p-3 text-white hover:bg-orange-500">Add Task</button>
                </div>
            </div>
        </form>
        </>
    )
}

export default CreateTaskForm