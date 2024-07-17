//to store width
let width;

//value display
let value = document.querySelector(".value");

//grid layout value
const slider = document.querySelector("#slider");

// to store the selected grid value
let val;

//toggle new-grid button
const newGridBtn = document.querySelector("#new-grid");

//modal
const modal = document.querySelector("#modal");

//used to show the modal
newGridBtn.addEventListener('click',openModal);

//close button of the modal
const closeBtn = document.querySelector("#close");

//to apend child 
const container = document.querySelector(".container");

function openModal(){
    // used to open the modal each time new grid btn is clicked
    modal.showModal();
    newGrid();
    value.textContent = slider.value;
    slider.oninput = function(){
        //using to dynamically change the value displayed in the slider
        value.textContent = this.value;
        val = this.value;
    }
    
}

//used to close the modal
closeBtn.addEventListener('click',()=>{
    modal.close();
    calculateWidth(val);
    createBoxes(val,width);
})

function calculateWidth(value){
    //using to calculate the width and height of the boxes
    //the calculation is (1/value)*100 but here we have used the other method to round off effectively
    width = (1/value)*1000000;
    width = Math.round(width);
    width = width/10000
    return width;
}

function createBoxes(value,width){
    //caluclating the total number of boxes
    const totalBox = value*value;



    for(i=0;i<totalBox;++i){
        //creating each boxes and giving its properties
        const box = document.createElement("div");
        container.appendChild(box);
        box.style.width = width+"%";
        box.style.height = width+"%";
        box.classList.add("box");
    }

}

function newGrid(){
    //new canvas
    container.innerHTML="";
}

//listener to the color picker
const colorPicker = document.querySelector('#Color-picker')
let color="black";

//getting choosed color
colorPicker.addEventListener('input',()=>{
    color=  colorPicker.value;
    container.style.cursor = `url('/img/bx--paint.png'),auto`
    return color;
})

//eraser
const eraser = document.querySelector('#eraser');
eraser.addEventListener('click',()=>{
    color = 'white';
    container.style.cursor = `url('/img/eraser.png'),auto`;
})

//clearing the canvas
const reset = document.querySelector('#Reset');
reset.addEventListener('click',()=>{
    newGrid(); //creates a new newGrid
    createBoxes(val,width); // specifies the width and value of the previous grid
}
)

//to track whether the mouse button is pressed
let coloring = false;

//starting drawing point
container.addEventListener('mousedown',(e)=> coloring=true);


container.addEventListener('mousemove',(e)=>{
    if(coloring && e.target.classList.contains('box')){
        
        e.target.style.backgroundColor =color;

    }
})

//stopping drawing point
container.addEventListener('mouseup',()=>coloring=false);


