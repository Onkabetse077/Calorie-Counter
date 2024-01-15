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
}