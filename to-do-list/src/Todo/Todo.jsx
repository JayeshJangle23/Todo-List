import {useState} from "react";
import "./Todo.css"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
    const [task , setTask] = useState(() => getLocalStorageTodoData());

    
    const handleOnSubmit = (inputValue) =>{ //WITH THE HELP OF THESE WE STOP THE REFRESHING OF PAGE AFTER SUBMITING
        const {id,content,checked} = inputValue;
        if(!content)  return; //WE CANT STORE EMPTY

        const ifTodoMatched = task.find((currTask)=>currTask.content===content);  // CHECK DATA DUPLICATION
        if(ifTodoMatched) return;


        setTask((prevTask)=>[...prevTask,{id,content,checked}]);  // ... is spread operator and we store ourr prev data
    
    }

    setLocalStorageTodoData(task);

    
    //Handle Check
    const onHandleCheckedTodo = (content) => {
        const updatedTask = task.map((currTask) => {
            if(currTask.content === content){
                return {...currTask,checked: !currTask.checked};
            }
            else{
                return currTask;
            }
        });
        setTask(updatedTask);
    }
     

    //HAndle Delete
    const handleDeleteTodo=(value)=>{
        const updateTask = task.filter((currTask) => currTask.content !== value);
        setTask(updateTask);
    }
    const handleClearTodoData = () => {
        setTask([]);
    }
    return (
    <section className="todo-container">
        <header>
            <h1>Todo List</h1> 
            <TodoDate />          
        </header>

        <TodoForm onAddTodo={handleOnSubmit}/>

        <section className="myUnOrdList">
            <ul>
                {task.map((currTask,index) => {
                    return(
                        <TodoList key={currTask.id} 
                        data={currTask.content} 
                        checked={currTask.checked}
                        onHandleDeleteTodo={handleDeleteTodo}
                        onHandleCheckedTodo={onHandleCheckedTodo} />
                    )
                        })}
            
        </ul>
        </section>
        <section>
            <button className="clear-btn" onClick={handleClearTodoData} >Clear All</button>
        </section>
    </section>
    
    )
 }

