import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {
    const [inputValue , setInputValue] = useState({});
    
    const handleOnChange=(value)=>{ //WITH THE HELP OF THESE WE WRITE INPUT IN FORM
        setInputValue({id:value,content:value,checked:false});
    }

    const handleOnSubmit=(event)=>{ //WITH THE HELP OF THESE WE WRITE INPUT IN FORM
        event.preventDefault();
        onAddTodo(inputValue); 
        setInputValue({id:"",content:"",checked:false});

    }

    return (
        <section className="form" >
            <form onSubmit={handleOnSubmit}>
                <div>
                    <input type="text" className="todo-input" autoComplete="off" 
                    value={inputValue.content} onChange={(event)=>{handleOnChange(event.target.value)}}/>
                </div>
                <div>
                    <button type="submit" className="todo-btn">Add Tasks</button>
                </div>
            </form>
        </section>
    )
}