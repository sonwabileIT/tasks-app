import CreateTask from "./mytasks/create/page";
import MyTasks from "./mytasks/page";
import TaskList from "./mytasks/TaskList";


export default function Home() {
  return (
    <>
    <div className=" md:flex gap-2  ">
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
