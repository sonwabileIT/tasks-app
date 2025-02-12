"use client"
import { useRouter } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const endpoint = new URL("api/tasks/", baseURL).href;

export function CompleteButton({id, children}){

    const router = useRouter()

    const markComplete = async () => {
        try{
            const task = await fetch(`${endpoint}${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    isComplete: true,
                }),
                headers: {'Content-type':'Application/json'}
            });
            router.refresh();

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

