import Link from "next/link"

function NavBar(){
    return(
        <>
        <div className=" flex justify-between items-center p-4 border-b-2 border-black">
            <div>
                <h2 className="text-2xl"><Link href="/">MyTasks</Link></h2>
            </div>
            <nav>
                <ul className="flex gap-6">
                    <li className="p-2 hover:bg-slate-300">
                        <Link href="/mytasks">My Tasks</Link>
                    </li>
                    <li className="p-2 hover:bg-slate-300">
                        <Link href="">Add Tasks</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default NavBar