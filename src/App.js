import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  useEffect (() => {
    <button>click</button>
  })

  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Tuesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj,index) => {
          return (
            <div className="todo" key={index}>
              <div className="left">
                <input onChange={(e) => {
                  console.log(e.target.checked)
                  console.log(obj)
                  setToDos(toDos.filter(obj2 => {
                    if(obj2.id === obj.id){
                      obj2.status = e.target.checked;
                    }
               return obj2;
            }))
            }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" 
                onClick={() => {
                  console.log(obj.id);
                  
                  const removeArray = [...toDos].filter(toDo => obj.id !== toDo.id)
                  console.log(removeArray);
                  setToDos(removeArray)
                }}
                ></i>
              </div>
            </div>
          )
        })}
        {
          toDos.map((obj) => {
            if(obj.status) {
              return(<h1>{obj.text}</h1>)
            }
            return null;
          })
        }
      </div>
    </div>
  );
}

export default App;
