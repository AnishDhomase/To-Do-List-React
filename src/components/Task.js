import "./Task.css"
import DeleteBtn from "./DeleteBtn";
import DownBtn from "./DownBtn"
import UpBtn from "./UpBtn"

function Task ({listObj,updateCompletedTasks,ind,upDateTask,upTask,downTask}){
    function calcCompletedTasks(){
        if(listObj.completedStatus)
            updateCompletedTasks(-1);
        else    updateCompletedTasks(1);
        listObj.completedStatus = ! listObj.completedStatus;
    }

    return (
        <div className="taskBar">
            <img onClick={calcCompletedTasks} src={require(`./Images/${listObj.completedStatus ? "done" : "notDone"}.png`)}/>
            <input type="text" readOnly placeholder={listObj.taskName}/>
            <UpBtn upTask={upTask} listObj={listObj}/>
            <DownBtn downTask={downTask} listObj={listObj}/>
            <DeleteBtn upDateTask={upDateTask} listObj={listObj} updateCompletedTasks={updateCompletedTasks}/>
        </div>
    );
}

export default Task