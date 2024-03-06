let container=document.querySelectorAll(".container");
let dragItem=null;

function dragStart(e) {
    dragItem=e.currentTarget;
   // console.log(dragItem);
}

for(let i=0;i<3;i++)
{
    container[i].addEventListener("dragover", (e) => {
        if(dragItem.parentNode.id === e.currentTarget.id)
        {
            return;
        }

        e.preventDefault();
    })

    container[i].addEventListener("drop", (e) => {
       // console.log(e.currentTarget, dragItem);
        e.currentTarget.appendChild(dragItem);
    })
}