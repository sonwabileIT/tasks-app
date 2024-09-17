"use client"

import { useRouter } from "next/navigation"
function DeleteTaskButton({id}){

    const router = useRouter();
    async function deleteTask(){

        try{
            const data = await fetch(`http://localhost:4000/tasks/${id}`,{
                method: "DELETE",
                headers: {'Content-type':'application/json'}
            })

            const response = await data.json()
            router.refresh()
            return console.log(response)
            
        }
        catch(error){
            console.log(error)
        }
    }


    return(
        <>
        <button onClick={deleteTask} className="bg-red-400 rounded-md p-2">Delete</button>
        </>
    )
}

export default DeleteTaskButton