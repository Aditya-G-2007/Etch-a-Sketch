const parentDiv = document.querySelector('.parent');
let dimension = 16;
 const rainbowColors = [
    '#FF0000',  // Red
    '#FF7F00',  // Orange
    '#FFFF00',  // Yellow
    '#00FF00',  // Green
    '#0000FF',  // Blue
    '#4B0082',  // Indigo
    '#9400D3'   // Violet
  ];

// let pointer =0;
for(let iterator=0;iterator<dimension;iterator++ ){
    const tempStorage = document.createElement('div');
    for(let number=0;number<dimension;number++ ){
       const pointer=document.createElement('div');
        pointer.style.backgroundColor='white';
        pointer.className = "board";
        pointer.style.height = '30px';
        pointer.style.width = '30px';
        tempStorage.append(pointer);
    }
    tempStorage.style.display = 'flex';
    tempStorage.style.justifyContent = 'center';
    parentDiv.append(tempStorage);
}
parentDiv.style.height ='500px';
parentDiv.style.width = '100%';
// parentDiv.style.border='1px solid black';
console.log("JS loaded!"); // checking in console if all got llinked and if's working ;
const list = document.getElementsByTagName('button')

function eventListener(){
    const items = document.getElementsByClassName('board');
    return items;
}
function black(event){
    const inventory = eventListener();
    for(const element of inventory){
        element.addEventListener("mousedown",event =>{
            element.style.backgroundColor = 'black';
        })
}
}
function erasor(event){
     const inventory = eventListener();
    for(const element of inventory){
        element.addEventListener("mousedown",event =>{
            element.style.backgroundColor = 'white';
        })
    }
}
function gray(event){
 const inventory = eventListener();
    for(const element of inventory){
        element.addEventListener("mousedown",event =>{
            element.style.backgroundColor = 'gray';
        })
    }
}
function rand (event){
    const inventory = eventListener();
    const randomIndex = Math.floor(Math.random() *rainbowColors.length);

// Select the element at the random index
    const randomElement = rainbowColors[randomIndex];
    
    for(const element of inventory){
        element.addEventListener("mousedown",event =>{
            element.style.backgroundColor = randomElement;
        })
    }
}
function reset(event){
    const inventory = eventListener();
    for(const element of inventory){
        element.style.backgroundColor = 'white';
    }
}

function functionality (event){
    if (event.target.id === "black"){
        black(event);
    }
    else if (event.target.id === "erasor"){
        erasor(event);
    }
    else if (event.target.id === "gray"){
        gray(event);
    }
    else if (event.target.id === "random"){
        rand(event,rainbowColors);
    }
    else if (event.target.id === "reset"){
        reset(event);
    }
}
for(const element of list){
    element.addEventListener('click', event =>{
      functionality(event);
    })
} 