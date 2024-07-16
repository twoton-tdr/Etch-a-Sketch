//value display
let value = document.querySelector(".value");

//grid layout value
const slider = document.querySelector("#slider");

// val used to storage the final value of the slider selector
let val;

//toggle new-grid button
const newGridBtn = document.querySelector("#new-grid");

//modal
const modal = document.querySelector("#modal");

//used to show the modal
newGridBtn.addEventListener('click',openModal);

//close button of the modal
const closeBtn = document.querySelector("#close");

//used to close the modal
closeBtn.addEventListener('click',()=>{
    modal.close();
})



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

