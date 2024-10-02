"use client"
import { CompleteButton } from "./CompleteButton"
import DeleteTaskButton from "./DeleteTaskButton"

function Task({id, taskname, taskdescription, isComplete}){
    return(
        <>
            <li key={id} className="bg-white rounded-md p-4 border-2 border-gray-200 md:border-white hover:border-orange-500 hover:shadow-xl">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-2xl">{taskname}</h2>
                        <div className="flex gap-2">
                            <CompleteButton id={id} children={isComplete ? 
                                                                            <div className="bg-green-400 rounded-md p-2">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                                </svg>
                                                                            </div>
                                                                                : <div className="bg-blue-300 hover:bg-blue-600 rounded-md p-2">
                                                                                    Incomplete
                                                                                </div>} >
                                
                            </CompleteButton>
                            <DeleteTaskButton id={id}></DeleteTaskButton>
                        </div>
                    </div>
                    <div className=" border-t-2 border-gray-300 pt-2">
                    </div>
                    <p>{taskdescription}</p>
                </li>
        </>
    )
}

export default Task