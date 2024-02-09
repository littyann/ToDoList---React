import { useState } from 'react';
import './App.css';

function App() {

  const currentDateTime = new Date().toLocaleString('en-US', {
    weekday: 'long',
    // year: 'numeric',
    // month: 'long',
    // day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    // second: 'numeric'
  });

  const [toDos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, It's {currentDateTime} 🌝</h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => setTodo(e.target.value)}  type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...toDos, { id:Date.now, text :todo , status: false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj) => {

            return (

              <div className="todo">
                <div className="left">
                  <input onChange={(e)=>{

                    setTodos(toDos.filter(obj2=>{
                      if(obj2.id===obj.id){
                        obj2.status=e.target.value
                      }
                      return obj2
                    }))
                  }} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={()=>setTodos(toDos.filter(obj2=>{
                    let temp
                    if(obj2.id!==obj.id){
                      temp=obj2
                    }
                    return temp
                  }))} className="fas fa-times"></i>
                </div>
              </div>
            )

          })


        }
      </div>
    </div>
  );
}

export default App;
