const boxes = document.querySelectorAll(".box");
const heading = document.querySelector(".heading span");
const btn = document.querySelector(".btn");

const colors = [
    "#efd81d", 
    "#61dbfb", 
    "#41b883", 
    "#b52e31", 
    "#43853d", 
    "#cf649a",
    "#e04e39",
]

const tech = [
    "JS",
    "REACT",
    "VUE",
    "NODE",
    "SASS",
    "ANGULAR",
    "EMBER",
]

const testStyle = () =>{
    heading.style.color = colors[current -1];
    heading.textContent = tech[current -1];
    btn.style.backgroundColor = colors[current - 1];
    btn.firstElementChild.textContent = tech[current -1]
}
let current = 1;
let interval = setInterval(() => {
    boxes.forEach((box) => {
        if(current > boxes.length) current = 1

        if(box.classList[1].split("-")[1] * 1 === current) {
            box.classList.add("active")
        }else{
            box.classList.remove("active")
        }
    });
    testStyle();
    current++;
},2000)

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        boxes.forEach((cube) =>{
            cube.classList.remove("active")
        });
        box.classList.add("active");
        current = box.classList[1].split("-")[1] *1;
        textStyle()
        clearInterval(interval)
    })
})