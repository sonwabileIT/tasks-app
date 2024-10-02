"use client"
import { useRouter } from "next/navigation";

export function CompleteButton({id, children}){

    const router = useRouter()

    const markComplete = async () => {
        try{
            const task = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    isComplete: true,
                }),
                headers: {'Content-type':'Application/json'}
            });
            // const result = await task.json()
            router.refresh();
            // return console.log("From markComplete function. ", id, result);

            

        }catch (error){
            console.log(error)
        }
        
    }

    return(
        <button onClick={markComplete} >
            {children}
        </button>
    )
}

