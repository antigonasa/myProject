import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './styles/todos.scss'

const Todos = () => {

    //get data using javascript fetch----------------------------------------------------
    // const [todos, setTodos] = useState([]);
    // async function getTodosList(){
    //     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    //     const pulledData = await response.json();
    //     setTodos(pulledData);
    // }
    // useEffect(() => {
    //     getTodosList();
    // }, [])

    const [todos2, setTodos2] = useState([]);

    const getTodosAxios = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                console.log('res:::', res.data);
                setTodos2(res.data);
            })
            .catch((err) => {
                console.log('Error:::', err)
            })
    }

    console.log('todossss:', todos2)

    return (
        <div className='todos'>
            <h1>Todos</h1>

            {/* display the data we get from fetch()------------------- */}
            {/* <div className="items">
            {todos.slice(0, 30).map(
                (props) => {
                    return(
                        <div className='todo' key={props.id}>
                            <h5>{props.title}</h5>
                        </div>
                    )
                }
            )}
        </div> */}
            <div className="items">
                {todos2.slice(0, 30).map((props) => {
                    return (
                        <div className='todo' key={props.id}>
                            <h5>{props.title}</h5>
                        </div>
                    )
                })}
            </div>
            <button onClick={getTodosAxios}>Get Todos</button>
        </div>
    )
}

export default Todos