                            //global variables
const boxContainer = document.querySelector('#box-container');
const modal = document.querySelector('#modal');
const openModalBtn = document.querySelector('#modal-btn');
const closeModalBtn = document.querySelector('#close-btn');
const overlay = document.querySelector('#overlay');
const enterBtn = document.querySelector('#enter');




                //functions
//display modal
function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//close modal
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden') ;
}

    //function getUserInput() {
       // const input = document.querySelector('#user-input')
        //let inputValue= input.value;
        //input.value = '';
        //return inputValue   
    //}

                //eventlisteners
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
enterBtn.addEventListener('click', closeModal);

//create a square div
let defaultNumberBoxes = 16;

enterBtn.addEventListener('click', function() {
    const input = document.querySelector('#user-input')
    defaultNumberBoxes = input.value;
    console.log(defaultNumberBoxes);
});
console.log(defaultNumberBoxes);
let b = Math.pow(defaultNumberBoxes, 2);
let size = 960/defaultNumberBoxes;
let boxSize = (size.toFixed(2)-5);

for (let i = 0; i < b; i++) {
    box = document.createElement('div');
    box.style.border = 'black 1px solid';
    box.style.height = boxSize + 'px'; 
    box.style.width = boxSize + 'px';
    box.style.backgroundColor = '#68A4F1';
    box.style.borderRadius = '10px';
    box.style.boxShadow = '3px 3px #A9CEE8';
    box.style.display = 'flex';
    box.style.display = 'wrap';
    boxContainer.appendChild(box);
}

