                //functions
//create default number of square div
function defaultNumberBoxes() {
    const boxContainer = document.querySelector('#box-container');
    const defaultNumber = 16;
    let toPowerOf = Math.pow(defaultNumber, 2);
    let size = 960/defaultNumber;
    let boxSize = (size.toFixed(2)-5);
    for (let i = 0; i < toPowerOf; i++) {
        box = document.createElement('div');
        box.style.height = boxSize + 'px'; 
        box.style.width = boxSize + 'px';
        box.style.backgroundColor = '#003060';
        box.style.borderRadius = '10px';
        box.style.display = 'flex';
        box.style.flex = 'wrap';
        box.style.transition = 'background-color ease in 10ms';

        box.addEventListener('mouseenter', function(event) {
            event.target.style.backgroundColor = '#68BBE3';
        })
        
        box.addEventListener('mouseleave', function(event) {
            event.target.style.backgroundColor = '#003060';
            event.target.style.transition = 'all 1s';
        })

        boxContainer.appendChild(box);
        
        }        
}
defaultNumberBoxes(); //invoke function

//display modal
function openModal() {
    const modal = document.querySelector('#modal');
    const overlay = document.querySelector('#overlay');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//close modal
function closeModal() {
    const modal = document.querySelector('#modal');
    const overlay = document.querySelector('#overlay');
    modal.classList.add('hidden');
    overlay.classList.add('hidden') ;
}

//display new grid based on user's input
function createGrid(gridSize) {
    const boxContainer = document.querySelector('#box-container');
    boxContainer.innerHTML = ''; // clear the container before creating new grid

    const size = 960 / gridSize;
    const boxSize = (size.toFixed(2) - 5);

    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement('div');
        box.style.height = boxSize + 'px';
        box.style.width = boxSize + 'px';
        box.style.backgroundColor = '#003060';
        box.style.borderRadius = '10px';
        box.style.transition = 'background-color ease in 10ms';

        box.addEventListener('mouseenter', function(event) {
            event.target.style.backgroundColor = '#68BBE3';
        })
        
        box.addEventListener('mouseleave', function(event) {
            event.target.style.backgroundColor = '#003060';
            event.target.style.transition = 'all 1s';
        })

        boxContainer.appendChild(box);
    }
}

function getUserInput() {
    const inputValue = parseInt(input.value);
    input.value = '';
    createGrid(inputValue);
}

                //variables for eventlisteners
const input = document.querySelector('#user-input');
const openModalBtn = document.querySelector('#modal-btn');
const closeModalBtn = document.querySelector('#close-btn');
const enterBtn = document.querySelector('#enter');

                //eventlisteners
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
enterBtn.addEventListener('click', closeModal);
enterBtn.addEventListener('click', getUserInput);
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getUserInput();
        closeModal();
    }
});