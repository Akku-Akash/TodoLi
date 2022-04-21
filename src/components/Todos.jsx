import axios from "axios"
import { useState, useEffect } from "react"


export const Todos = () => {
    const [text, setText] = useState("")

    const [todos, setTodos] = useState([])

    

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get("http://localhost:3400/todos").then((res) => {
            setTodos(res.data)
        })
    }

    return <div>
        <h1>Tasks to do:-</h1>
        <input type="text" onChange={e => setText(e.target.value)} />
       <button onClick= {() => { 
           axios.post("http://localhost:3400/todos", {title: text, status: false}).then(() => {
               getData()
           })
       }}>Save Task</button>
       {todos.map(g => <div key = {g.id}>{g.title}</div>)}
       
    </div>
}