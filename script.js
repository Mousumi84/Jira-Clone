const form = document.querySelector("#create-task-form");
const page=document.querySelector("#page");
const todo = document.querySelector("div.TODO");
const inprogress = document.querySelector("div.INPROGRESS");
const done = document.querySelector("div.DONE");
const create = document.querySelector(".create");
const expand=document.querySelector(".material-symbols-outlined");

create.addEventListener("click", (e) => {
    create.classList.add("hide-page");
    page.classList.remove("hide-page");
})

expand.addEventListener("click", (e) => {
    let hideform=e.target.parentNode;
    //console.log(hideform);
    hideform.classList.toggle("hide");
    expand.innerText=hideform.classList.contains("hide")? "expand_less" : "expand_more";

    //console.log(expand.innerText);
})


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskform = {
        topic: form.topic.value,
        description: form.description.value,
        developer: form.developer.value,
        estimatedays: form.estimatedays.value,
        state: form.state.value
    }
    console.log(taskform);
    newTask(taskform);
    form.reset();
})

/*
<div class="task-card" title="This ia a dummy task">
    <h3 class="task-topic">Chat Box</h3>
    <span class="estimate-days">3 days</span>
    <span class="image">M</span>
</div>
*/

function newTask(task) {
     taskCard=document.createElement("div");
    taskCard.className="task-card";
    taskCard.title=task.description;
    taskCard.draggable="true";

    const taskTopic=document.createElement("h3");
    taskTopic.className="task-topic";
    taskTopic.innerText=task.topic;

    const days=document.createElement("span");
    days.className="estimate-days";
    days.innerText=task.estimatedays+" days";
    
    const image=document.createElement("span");
    image.className="image";
    image.innerText=task.developer[0].toUpperCase();

    taskCard.append(taskTopic,days,image);


    if(task.state == "TODO")
    {
        todo.after(taskCard);
    }
    else if(task.state == "INPROGRESS")
    {
        inprogress.after(taskCard);
    }
    else if(task.state == "DONE")
    {
        done.after(taskCard);
    }

taskCard.addEventListener("dragstart", dragStart);


}