

function UpBtn ({upTask,listObj}){
    function upTheTask(ev){
        // const taskBar = ev.target.closest('.taskBar');
        // taskBar.classList.add("upAnimClass");
        // setTimeout(()=>{
        //     taskBar.classList.remove("upAnimClass");
        // },1500);
        upTask(listObj);
    }
    return (
        <span onClick={upTheTask}className="TaskBtn"><i className="fa-solid fa-arrow-up"></i></span>
    );
}

export default UpBtn