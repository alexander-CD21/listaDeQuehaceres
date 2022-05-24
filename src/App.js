import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [Tarea, setTarea] = useState({
    nombre: "",
    propiedad: false,
    id: count
  });
  const [ListaTarea, setListaTarea] = useState([]);

  const agregarTarea = (event) => {
    event.preventDefault();
    setCount(count+1 );
    console.log("count",count);
    setTarea({
      ...Tarea,
      id : count+1
     
    })
    console.log("Tarea",Tarea);
    setListaTarea([...ListaTarea, Tarea]);
  }

  useEffect(() => {
    console.log("Cambió", ListaTarea);
  }, [ListaTarea]);

  const eliminarTarea = (id) => {
    console.log('antes:', ListaTarea);
    setListaTarea(ListaTarea.filter(elemento => elemento.id != id ))
  }

  console.log(ListaTarea);
  return (
    <div className="App">
      <form onSubmit={agregarTarea}>
        <div>
          <label htmlFor='tarea'>
            Tarea Pendiente :
          </label>
          <input type="text" id="tarea"
            onChange={(event) => setTarea({
              ...Tarea,
              nombre: event.target.value}
            )} />
        </div>
        <button type='submit'>
          ADD
        </button>
      </form>
      {
        ListaTarea.map((variable, index) => {

          return (
            <div key={index} >
              <span  > {index + 1}. {variable.nombre} </span>
              <input type="checkbox" />
              <button onClick={(e) => eliminarTarea(variable.id)}> Delete</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
