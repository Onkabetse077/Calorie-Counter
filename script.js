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
    const strArray =str.split('');
    const cleanStrArray =[];

    for (let i = 0;i < strArray.length -1; i++){
        if (!["+", "-", " "].includes(strArray[i])){
            cleanStrArray.push(strArray[i]);
        }
    }
}