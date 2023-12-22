
import './App.css';
import { useState } from 'react';
import InputBox from './components/InputBox';
import Task from './components/Task';
import {listArr,completedTasks} from "./components/data/listdata"

function App() {
  const [listArr,setListArr] = useState([]);
  const [completedTasks,setCompletedTasks] = useState(0);

  const timeID = new Date().getTime();

  function addTask(newToDo){
    setListArr([...listArr, {...newToDo, id:timeID}]);
  }
  function delTask(ToDo){
    let indexTodelete = listArr.indexOf(ToDo);
    setListArr(listArr.filter(e => e !== ToDo ));
  }
  function upTask(ToDo){
    let indexMove = listArr.indexOf(ToDo);
    let indexAbove = indexMove - 1;
    if(indexAbove >= 0){
      const updatedArr = [...listArr];
      [updatedArr[indexMove],updatedArr[indexAbove]] = [updatedArr[indexAbove],updatedArr[indexMove]];
      setListArr(updatedArr);
    }  
  }
  function downTask(ToDo){
    let indexMove = listArr.indexOf(ToDo);
    let indexBelow = indexMove + 1;
    if(indexBelow < listArr.length){
      const updatedArr = [...listArr];
      [updatedArr[indexMove],updatedArr[indexBelow]] = [updatedArr[indexBelow],updatedArr[indexMove]];
      setListArr(updatedArr);
    }  
  }
  function updateCompletedTasks(add){
    setCompletedTasks(completedTasks + add);
  }
  let i = -1;

  return (
    <div className="App">

      <div className='head'>
        <h2>To Do List</h2>
        <InputBox addTask={addTask}/>
        <h3>Completed Tasks : {completedTasks}/{listArr.length}</h3>
      </div>

      <div className='taskBox'>
        {listArr.map((listObj) => {
          i++;
          return (<Task listObj={listObj} updateCompletedTasks={updateCompletedTasks} upDateTask={delTask} upTask={upTask} downTask={downTask} />)  
        }
          
        )}
      </div>
    </div>
  );
}

export default App;
