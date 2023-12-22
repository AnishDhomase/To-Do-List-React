

function DeleteBtn ({upDateTask,listObj,updateCompletedTasks}){
    function deleteTask(){
        upDateTask(listObj);
        if(listObj.completedStatus){
            updateCompletedTasks(-1);
        }
    }
    return (
        <span onClick={deleteTask}className="TaskBtn"><i className="fa-solid fa-trash"></i></span>
    );
}

export default DeleteBtn