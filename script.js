const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");

const subTitle = document.querySelector(".subtitle");

let count = 0;

function addOne(event){
    console.log(event.target.classList);
    count++;
    subTitle.innerHTML = "You've clicked the lights " + count + " times";
    event.classList.toggle("active");
}

lightbulb1.addEventListener("click", addOne);
lightbulb2.addEventListener("click", addOne);
lightbulb3.addEventListener("click", addOne);