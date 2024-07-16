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

function openModal(){
    // used to open the modal each time new grid btn is clicked
    modal.showModal();
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
    console.log(width);
    createBoxes(val,width);
})

function calculateWidth(value){
    //using to calculate the width and height of the boxes
    //the calculation is (1/value)*100 but here we have used the other method to round off effectively
    width = (1/value)*10000;
    width = Math.round(width);
    width = width/100
    return width;
}

function createBoxes(value,width){
    //caluclating the total number of boxes
    const totalBox = value*value;

    //to apend child 
    const container = document.querySelector(".container");

    for(i=0;i<totalBox;++i){
        //creating each boxes and giving its properties
        const box = document.createElement("div");
        container.appendChild(box);
        box.style.width = width+"%";
        box.style.height = width+"%";
        box.classList.add("box");
    }

}