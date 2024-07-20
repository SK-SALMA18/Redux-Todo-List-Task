import React ,{useState} from 'react';
import  TodoList  from './TodoList';
import  Todo  from './Todo';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './actions';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.Reducers);
  const [editFormVisibility, setEditFormVisibility]=useState(false);
  const [editTodo, setEditTodo]=useState('');
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }
    return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center text-warning" >TODO-APP USING REACT-REDUX</h1>
      <TodoList editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todo handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length > 1 && (
        <button className='btn btn-success btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App;