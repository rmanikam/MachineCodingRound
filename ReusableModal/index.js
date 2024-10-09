

let btn = document.getElementById("btn");
let modal = document.getElementById("modalContainer")

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() 
{
    modal.style.display = "block";
}


span.onclick = function()
{

    modal.style.display = "none";
}

window.onclick = function(event) {
    console.log("event", event.target, modal);
    
    if(event.target == modal)
    {
        modal.style.display = "none";
    }

}
