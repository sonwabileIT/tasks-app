import CreateTask from "./mytasks/create/page";
import MyTasks from "./mytasks/page";


export default function Home() {
  return (
    <>
    <div className="md:flex pb-4 gap-2 ">
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
