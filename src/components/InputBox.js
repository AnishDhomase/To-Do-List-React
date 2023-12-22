import "./InputBox.css"

function InputBox ({addTask}){
    let inptTask;
    let InputElem;
    function getInputTask(ev){
        inptTask = ev.target.value;
        InputElem = ev.target;
    }
    function prepareTaskToAdd(ev){
        if(ev.nativeEvent.key=="Enter" || ev.target.classList.contains("btn")){
            if(!inptTask){
                alert("Add the Task First!")
                return;
            }    
            addTask({
                taskName : inptTask,
                completedStatus : false
            })
            const taskStatus = document.querySelector(".App h3")
            taskStatus.style.visibility = "visible";
            InputElem.value = "";
        }  
    }
    return (
        <header className="inptBox">
            <input onChange={getInputTask} onKeyDown={prepareTaskToAdd} type="text" placeholder="Enter Task"/>
            <button className="btn" onClick={prepareTaskToAdd}>Add</button>
        </header>
    )
}

export default InputBox