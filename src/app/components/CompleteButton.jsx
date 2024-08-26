"use client"


export function CompleteButton({id, children}){

    const markComplete = async () => {
        try{
            const task = await fetch(`http://localhost:4000/tasks/${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    isComplete: true,
                }),
                headers: {'Content-type':'Application/json'}
            });
            const result = await task.json()
            return console.log("From markComplete function. ", id, result);

            

        }catch (error){
            console.log(error)
        }
        
    }

    return(
        <button onClick={markComplete} className="bg-cyan-300 rounded-md p-2">
            {children}
        </button>
    )
}

