


let starContainer = document.getElementById("star-container");

let star = document.querySelectorAll(".star");

let filled = 0;


starContainer.addEventListener("click", function(e) 
{
       let currentValue = e.target.dataset.index;
       console.log("filled", filled);
       console.log("currentValue", currentValue);
       for(let i = 0; i < filled; i++)
        {
             star[i].classList.remove("currValue");
        }
        
       for(let i = 0; i < currentValue; i++)
       {
            star[i].classList.add("currValue");
       }
       document.getElementById("display").innerText = `${currentValue}`
       
       filled = currentValue;

})


starContainer.addEventListener("mouseover", function(e) 
{
       let currentValue = e.target.dataset.index;
      
        console.log("abc", currentValue)
       for(let i = 0; i < 5; i++)
        {
             star[i].classList.remove("currValue");
        }
        
       for(let i = 0; i < currentValue; i++)
       {
            star[i].classList.add("currValue");
       }
       
      

})

starContainer.addEventListener("mouseout", function(e) 
{
    let currentValue = e.target.dataset.index;
    console.log("def", currentValue)
      
    for(let i = 0; i < 5; i++)
        {
             star[i].classList.remove("currValue");
        }
        
       for(let i = 0; i < filled; i++)
       {
            star[i].classList.add("currValue");
       }
       
      

})