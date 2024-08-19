import TaskList from "./TaskList"

function MyTasks(){
    return(
        <>
        <div>
            <h2 className="text-4xl my-7 text-center">My Tasks</h2>
            <TaskList />
            {/*Tasks Lists*/}
        </div>
        </>
    )
}

export default MyTasks