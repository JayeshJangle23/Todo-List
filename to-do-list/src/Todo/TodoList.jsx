import { FaCheckCircle } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

export const TodoList = ({ data, checked ,onHandleDeleteTodo , onHandleCheckedTodo  }) => {
    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="check-btn" onClick={()=> onHandleCheckedTodo(data)}>
                <FaCheckCircle />
            </button>
            <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
                <RiDeleteBin2Fill />
            </button>
        </li>
    );
};
