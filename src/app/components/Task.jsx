"use client"
import { CompleteButton } from "./CompleteButton"
import DeleteTaskButton from "./DeleteTaskButton"

function Task({id, taskname, taskdescription, isComplete}){
    return(
        <>
            <li key={id} className="bg-orange-300 rounded-md p-4">
                    <div className="flex justify-between items-center  mb-4">
                        <h2 className="text-2xl">{taskname}</h2>
                        <div className="flex gap-2">
                            <CompleteButton id={id} children={isComplete ? 'Complete' : 'Incomplete'} ></CompleteButton>
                            <DeleteTaskButton id={id}></DeleteTaskButton>
                        </div>
                    </div>
                    <p>{taskdescription}</p>
                </li>
        </>
    )
}

export default Task