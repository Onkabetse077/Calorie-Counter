const calorieCounter = document.getElementById('calorie-counter');

//Inputs
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');

//Buttons
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

//
let isError = false;

//functions
function cleanInputString(str){
    //Cleaning the string(Removing any +,- Or " "(space) in the string)
    //Regular Expressions:Character Class
    const regex = /[+-\s]/g;
    return str.replace(regex,"");
}

function isInvalidInput(str){
    //Filtering Exponential Notation
    const regex = /[0-9]+e\d+/i;

    return str.match(regex);
}

function addEntry(){
    //template literals
    const targetInputContainer = document.querySelector(`#${entryDropdown.value()} .input-container`);

    const entryNumber = targetInputContainer.querySelectorAll('input[type = "text"]').length + 1;
    //New-Line
    const HTMLString = `
        <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
        <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
        <input type="number" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" min="0" />`;
    targetInputContainer.insertAdjacentElement("beforeend", HTMLString);
}
function getCaloriesFromInputs(list){
    let calories = 0;
    for(let i = 0;i < list.length; i++){
        const currVal = cleanInputString(list[i].value);
        const invalidInputMatch = isInvalidInput(currVal);

        if (invalidInputMatch){}
    }
}

//Event Listener
addEntryButton.addEventListener("click", addEntry);