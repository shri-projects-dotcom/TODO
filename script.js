const ibox = document.getElementById("ibox");
const listContainer = document.getElementById("listitems");
// console.log(ibox)
// console.log(listContainer)

function addTask(){
    if(ibox.value ===''){
        alert("please enter a task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = ibox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    ibox.value = "";
    saveData();
}
 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);   
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();