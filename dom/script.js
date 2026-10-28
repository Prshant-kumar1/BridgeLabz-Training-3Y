// Get elements by different methods

//let h1el = document.getElementById("heading");
//let h2el = document.getElementsByClassName("heading");
//let h3el = document.getElementsByTagName("h1");
let h1el = document.querySelector("#heading");
//let h5el = document.querySelector(".heading");

h1el.style.color = "red";
h1el.style.backgroundColor = "yellow";
h1el.textContent = "Hello World";   //change the text of the element
h1el.innerHTML = "<h2>Hello World</h2>";  //change the html of the element(whole tag will be replaced with new html)
 
console.log(h1el);


let btn = document.querySelector("#Btn");

// btn.addEventListener("click", function() {
//     h1el.style.color = "blue";
//     h1el.style.backgroundColor = "lightgray";
// });

btn.addEventListener("dblclick", function() {
    h1el.style.color = "green";
    h1el.style.backgroundColor = "lightyellow";
})

btn.addEventListener("mouseover", function() {
    h1el.style.color = "orange";
    h1el.style.backgroundColor = "lightblue";
})

let divEl = document.querySelector(".student-data");

divEl.addEventListener("mousemove", function() {
    let arr = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    let randomColor = "#";
    for(let i=0; i<6; i++){
        randomColor += arr[Math.floor(Math.random()*arr.length)];
    }

    divEl.style.backgroundColor = randomColor;
})