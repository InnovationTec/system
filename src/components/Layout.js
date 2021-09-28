import {AiOutlinePlus} from "react-icons/ai"
import Link from "next/link"
import {useRouter} from "next/router"
import {useTasks} from "../context/taskContext"

const Layout = ({ children}) => {

    const router = useRouter();
    const {tasks}= useTasks();


  return (
    <div className="h-screen bg-black text-white">
        <header className="flex items-center bg-black text-blue-800">
           <div className="inline-block"> 
           <Link href="/">
             <a>
              <h1 className="font-black items-center text-2xl  text-bold py-5 px-3">InnovationTECH</h1>
             </a>
            </Link>
            <span className="text-white text-center p-12 text-bold "> 
                {tasks.length} Costumer(s)</span>
           </div>

           <div  className="flex-grow text-right px-1 py-5">
            <button className="bg-blue-800 hover:bg-red-500 text-white fon px-5 py-2 rounded-sm inline-flex items-center" onClick={() => router.push("/new")} >
                <AiOutlinePlus className="mr-2"/>
                Add Costumer</button>
           </div>           
        </header>
        <hr/>

        <main className="px-5 pt-2">
        {children}


        </main>
      
    </div>
  )
}

export default Layout;
