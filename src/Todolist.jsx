import React from 'react'

const Todolist = (props) => {


    return (
        <>
        <div className='todo_style'>
         <span class="material-icons" onClick={
             () => {
                 props.onSelect(props.id);
             }
         }>clear</span>
        <li> {props.text} </li>
        </div>
        </>
    )
}

export default Todolist;
