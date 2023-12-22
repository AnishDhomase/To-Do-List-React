

function DownBtn ({downTask,listObj}){
    function downTheTask(){
        downTask(listObj);
    }
    return (
        <span onClick={downTheTask} className="TaskBtn"><i className="fa-solid fa-arrow-down"></i></span>
    );
}

export default DownBtn