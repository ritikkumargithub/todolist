import React, { useState } from 'react';
import Todolist from './Todolist';


const App = () => {

const [inputList, setInputList] = useState("");
const [Items, setItems] = useState([]); //creat empyt array for data store

const itemEvent = (event) => {
    setInputList(event.target.value);
};

const listOfitem = () =>{
    setItems((oldItems) => {
        return [...oldItems, inputList];
    });
    setInputList("");
}

const deleteItems = (id) => {
    setItems((oldItems) => {
        return oldItems.filter((arrElem, index) => {
            return index !== id;
        })
    })
}

    return (
        <>
           <div className='main_div'>
               <div className='center_div'>
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type="text" placeholder='Add Items' value={inputList} onChange={itemEvent} />
            <button onClick={listOfitem} > + </button>
        
            <ol>

               { Items.map( (itemsVal,index) => {
                     return(
                         <>
                     <Todolist key = {index} 
                         id = {index} 
                         text={itemsVal}
                         onSelect = {deleteItems}
                         /> 
                        </>
                    )})}
            </ol>
               </div>
               </div> 
        </>
    )
}

export default App;
