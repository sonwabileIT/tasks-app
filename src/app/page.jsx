import CreateTask from "./mytasks/create/page";
import MyTasks from "./mytasks/page";
import TaskList from "./mytasks/TaskList";


export default function Home() {
  return (
    <>
    <div className="md:flex pb-4 gap-2 bg-gray-100 ">
      <div className=" w-full">
        <CreateTask/>
      </div>
      <div className=" w-full">
        <MyTasks/>
      </div>
    </div>
    </>
  );
}
