"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
// import NavLink from 'react-router-dom'

function NavBar(){

    // const router = useRouter()
    const pathname = usePathname()
    return(
        <>
        <div className="  items-center p-4 border-b-2 border-black">
            {/* <div>
                <h2 className="text-2xl"><Link href="/">MyTasks</Link></h2>
            </div> */}
            <nav>
                <ul className="flex gap-6 justify-center">
                    <li className={pathname === '/mytasks' ? "p-2 bg-blue-400 rounded-md" : "hover:bg-slate-300 p-2 rounded-md"}>
                        <Link href="/mytasks" >My Tasks</Link>
                    </li>
                    <li className={pathname === '/mytasks/create' ? "p-2 bg-blue-400 rounded-md" : "hover:bg-slate-300 p-2 rounded-md"}>
                        <Link href="/mytasks/create" >Add Tasks</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default NavBar