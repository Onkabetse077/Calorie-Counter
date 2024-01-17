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

function calculateCalories(e){
    e.preventDefault();
    isError = false;

    //list of elements
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

    //
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

    //Node list
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    //
    if (isError){
        return;
    }

    //
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories =  budgetCalories - consumedCalories + exerciseCalories;

    //
   const surplusOrDeficit = remainingCalories >= 0 ? "Surplus" : "Deficit";

   //Output
    output.innerHTML = `<span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>`;

    //Removes
    output.classList.remove("hide");
}


function getCaloriesFromInputs(list){
    let calories = 0;
    for(let i = 0;i < list.length; i++){
        const currVal = cleanInputString(list[i].value);
        const invalidInputMatch = isInvalidInput(currVal);

        if (invalidInputMatch){
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }

        calories += Number(currVal);
    }
    return calories;
}

function clearForm(){
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));

    for (let i = 0; i < inputContainers.length; i++) {
        inputContainers[i].innerHTML = '';
    }
    budgetNumberInput.value = '';
    output.innerText = '';

    //Adds
    output.classList.add("hide");
}

//Event Listener
addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit",calculateCalories);
clearButton.addEventListener("click",clearForm);