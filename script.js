const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

function cleanInputString (str){
    // const strArray = str.split('');
    // const cleanStrArray = [];

    // for (let i=0; i<strArray.length; i++){
    //     //The .includes() method returns true if the array contains the character, and false if not. 
    //     //The logical NOT operator (!) will return the opposite of the value of the .includes() method
    //     if(!["+", "-", " "].includes(strArray[i]))
    //     cleanStrArray.push(strArray[i]);
    // }

    // const regex = /hello/;  //While looping through the string works, creating a new array is inefficient for memory and runtime performance.
    //Regular Expressions (referred to as "regex") to match specific characters.

    const regex = /[+-\s]/g;  // The character class \s will match any whitespace character. //Turned my +-\s pattern into a character class.
    return str.replace (regex, ""); 
    //.replace takes two arguments. The first is the character sequence to replace – this can either be a string or a regex pattern. The second is the string to replace that sequence with. 
}

// In HTML, number inputs allow for exponential notation (such as 1e10). You need to filter those out.
function isInvalidInput(str){
    const regex = /e/i;  //This flag makes your pattern case-insensitive.
}