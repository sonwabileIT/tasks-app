function CreateTaskForm(){
    return(
        <>
        <form className="max-w-screen-sm mx-auto p-5">
            <div>
                <div className="flex flex-col mb-6">
                    <label className="my-2">Task Name</label>
                    <input type="text" placeholder="Write task name..." className="p-2 rounded-md border-2 border-slate-700"/>
                </div>
                <div className="flex flex-col mb-6">
                    <label className="my-2">Task Description</label>
                    <textarea rows="4" placeholder="Write don your tasks..." className="p-2 rounded-md border-2 border-slate-700" />
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