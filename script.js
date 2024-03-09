const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

function cleanInputString (str){
    const strArray = str.split('');
    const cleanStrArray = [];

    for (let i=0; i<strArray.length; i++){
        //The .includes() method returns true if the array contains the character, and false if not. 
        //The logical NOT operator (!) will return the opposite of the value of the .includes() method
        if(!["+", "-", " "].includes(strArray[i]))
        cleanStrArray.push(strArray[i]);
    }
}