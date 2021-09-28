import {useTasks }from "../context/taskContext"
import Layout from "../components/Layout"
import {VscTrash} from "react-icons/vsc"
import {useRouter} from "next/router"



const Home = () => {
const {tasks, deleteTask} = useTasks();
const {push} = useRouter();

  return (
    <Layout>
      <div className="flex justify-center w-screen	-">

      {tasks.length === 0 ? (
          <h2  className="text-white">There are not costumers</h2>
        ): (
          <div className="w-10/12	">
           {tasks.map((task, i) =>(
             <div className="bg-gray-700  rounded hover:bg-blue-800 cursor-pointer    px-26  py-5 m-2 flex juatify-start items-center"
             key={task.id}
             onClick={() => push("/edit/" + task.id)}>
              <span className="text-5xl ml-10 w-screen	 	">{i}</span>
              <div className=" w-screen	">
                <div className="flex justify-between">
                  <h1  className=" -ml-40 descriptionfont-bold text-red-600 ">{task.title}</h1>
                  <button className="mr-10 -mt-0 -mb-0 text-right p-2 bg-red-700 hover:bg-red-400  rounded inline-flex items-center"
                    onClick={(e) =>{
                      e.stopPropagation();
                     deleteTask(task.id);
                    }}
                  >
                    <VscTrash className="mr-1 "/>
                    Delete</button>
                </div>
               <p className=" -ml-40 text-yellow-400 pt-2 text-xs font-bold">{task.description}</p>
               <span className=" -ml-40 text-green-400 cursor-pointer font-bold">{task.id}</span>
            </div>
          </div>        
          ))}
         </div>   
        )}
      </div>      
    </Layout>
  )
};

export default Home


