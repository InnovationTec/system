import {useEffect,useState} from "react"
import Layout from "../components/Layout"
import{useTasks} from "../context/taskContext"
import {useRouter} from "next/router"

const TaskFormPage = () => {
    const [task, setTask] = useState({
      title:"",
      description:"",
    })
    const {createTask, updateTask, tasks} = useTasks();
    const {push,query}= useRouter();

    console.log(query)

    const handleChange = (e) => {
      const {name,value} = e.target;
      setTask({...task,[name]:value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!query.id){
        createTask(task.title, task.description);  
      }
       else{
         updateTask(query.id, task)

       }
       push("/");
      };


    useEffect(() => {
      if (query.id){
        const taskFound = tasks.find(task => task.id === query.id)
        setTask({title: taskFound.title, description: taskFound.description})
      }
      
    },[]);

  return (
    <Layout>
      <div className="flex justify-center items-center h-full rounded">
      <form onSubmit={handleSubmit} className="bg-blue-800 p-10 h-2/4"> 
      <h1>{query.id ? 'Updating Costumer':'Creating Costumer'}</h1>

      <input 
      type="text" 
      name="title"
      placeholder="Costumer Name" 
      className="text-black mb-5 w-full"
      onChange={handleChange}
      value={task.title}
      />
      <div>
       Adding Description
      </div>

      <textarea 
      name="description"
      cols="30" 
      rows="5"
      placeholder="Write a descripcion services" 
     className="text-black w-full"  
      onChange={handleChange}
      value={task.description}>     
       </textarea>

      <button className="bg-blue-500 hover:bg-red-500 text-white mt-5 px-5 py-2 rounded-sm flex rounded disabled:opacity-40"disabled={!task.title||!task.description}>SAVE
      </button>
      </form>
      </div>   
     </Layout>
  )
}

export default TaskFormPage;
