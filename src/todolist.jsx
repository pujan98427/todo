import React from "react";

const Todolist = (props) => {

    return (
        <>
            <li><span>{props.listItem}</span> <button onClick={() => {
                props.onSelect(props.id)
            }} className="todoRemove">&#215;</button>   </li></>

    )
}
export default Todolist;