const yourChoice = document.getElementById("your-choice")
const select = document.querySelector(".select")
const pcChoice= document.getElementById(".pc-choice")
let userSelect;
let pcRandom;

select.addEventListener("click",(e)=>{
    // console.log(e.target.className)
    // console.log(e.target.getAttribute("alt"))
    userSelect=e.target.getAttribute("alt")
    yourChoice.innerHTML = `<image src="./assets/$(userSelect)"></image>`
    pc()
})