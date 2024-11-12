import { useState } from 'react';
import './App.css';

function App() {
  // Use map and filter function
  // const arr=[ 1,2,3,4 ] //Noraml Array

  //Now make array in which all items have two value
  // const arr = [{
  //   id : 1,
  //   name : "chandan"
  // },
  // {
  //   id : 2,
  //   name : "Rahul"
  // },]

  const [todo ,setTodo] = useState("")
  const [todos ,setTodos] = useState([])
  const [editId, setEditId] = useState(0) //editId contain the id of varible that will edit

  //handleSubmit function 
  const handlSubmit =(e)=>{
    e.preventDefault ();

    if (editId) {
      const editTodo = todos.find((index) =>index.id === editId)
      const UpdatedTodos = todos.map((t) =>t.id === editTodo.id ?(

        t= {id:t.id ,todo}):{id:t.id, todo :t.todo}
      )
      setTodos(UpdatedTodos);
      setEditId(0)
      setTodo("");
      return ;
    }
  // check todo is empty or nor ?
  if (todo!= '') {
    //Use spread operator
    setTodos([{id:`${todo} -${Date.now()}` , todo}, ...todos])
    setTodo('')

  }}
  //handledelete function created
   const handlDelete =(id)=>{
    const delTodo = todos.filter((to)=> to.id!==id)
    setTodos([...delTodo])
   }
   // handleEdit function
   const handleEdit = (id) =>{
    const editTodo = todos.find((index)=>index.id===id)
   setTodo(editTodo.todo)
   setEditId(id);
   }
  return (
    <div className="App">
{ 
 /* arr.map((num) => (
       <div>{num} ,</div>
      arr.filter((num)=> num!==3)
        arr.map((num )=> <div key={num.id}>{num.name}</div>   
      ) */
     <div className ="container">
      <h1>Todo list App </h1>
      <form className='todoFrom' onSubmit={handlSubmit}>
        <input
         type='text'
         value={todo} //Taking value from here
          //changing value from here
         onChange={(e)=> setTodo(e.target.value)}/> 
         {/* // check conditional reandering */}
        <button 
        type='submit'
        >{editId ?"Edit":"Go"} </button>

      </form >
      <ul className='allTodos'>
        {/* Use map function */}
        {
          todos.map((t)=>(

        <li className='singleTodo'>
         <span className='todoText' key={t.id} >{t.todo} </span>
         <button
         onClick={() =>handleEdit(t.id)}
         >Edit </button>
         <button onClick={() =>
          handlDelete(t.id)} >delete</button>
        </li>
          ))
        }
      
      </ul>
      </div>
      
  }
    


    </div>
  );
}

export default App;
