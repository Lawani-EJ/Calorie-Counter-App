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
    const regex = /\d+e\d+/i;  //This flag makes your pattern case-insensitive.
    // Added Character class from 0-9
    return regex = str.match(regex);  //.match() will return an array of match results – containing either the first match, or all matches if the global flag is used.

}

function addEntry(){
    const targetId = "#" + entryDropdown.value;
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`)
    // what happened here i dont know 

    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1; //The querySelectorAll() method returns a NodeList of all the elements that match the selector.
    // A NodeList is an array-like object, so you can access the elements using bracket notation.
    // want to number the entries a user adds. 
    //To get all of the number inputs, I used the querySelectorAll() method.

    //Each entry will have a text input for the entry's name, and a number input for the calories.
    // To get a count of the number of entries, query by text inputs.

    const HTMLString = `<label for = "${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type = "text" placeholder = "Name" id = "${entryDropdown.value}-${entryNumber}-name"></input>
    <label for = "${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min = "0" placeholder = "Calories" id = "${entryDropdown.value}-${entryNumber}-calories"></input>`;
    //Now i need to build the dynamic HTML string to add to the webpage. 
    //Declare a new HTMLString variable, and assign it an empty template literal string.

    //To see your new HTML content for the targetInputContainer, you will need to use the innerHTML property.
    targetInputContainer.insertAdjacentHTML("beforeend",HTMLString);
    //A bug occurs if you add a Breakfast entry, fill it in, then add a second Breakfast entry. 
    //The values added are disappeared.
    //The insertAdjacentHtml method takes two arguments. 
    //The first argument is a string that specifies the position of the inserted element
    //The second argument is a string containing the HTML to be inserted.
}

//The addEventListener method takes two arguments. The first is the event to listen to. 
//(Ex. 'click') The second is the callback function, or the function that runs when the event is triggered.
addEntryButton.addEventListener("click",addEntry);

function getCaloriesFromInputs(list){
    let calories = 0;
    //The list parameter is going to be the result of a query selector, which will return a NodeList.
    //A NodeList is a list of elements like an array.
    //It contains the elements that match the query selector.
    //You will need to loop through these elements in the list.
    for(const item of list){ //A for...of loop is used to iterate over elements in an iterable object like an array.
        //The NodeList values you will pass to list will consist of input elements.
        //So you will want to look at the value attribute of each element. 
        const currVal = cleanInputString(item.value);
        //Remember that you wrote a function earlier to clean the user's input? You'll need to use that function here.
        const invalidInputMatch = isInvalidInput(currVal);

        if(invalidInputMatch){
            //Remember that your isInvalidInput function returns String.match
            //which is an array of matches or null if no matches are found.
            //In JavaScript, values can either be truthy or falsy
            // A value is truthy if it evaluates to true when converted to a Boolean. 
            //A value is falsy if it evaluates to false when converted to a Boolean.
            //null is an example of a falsy value.

            alert(`Invalid Input: ${invalidInputMatch[0]}`);

            //Browsers have a built in alert() function, 
            //which you can use to display a pop-up message to the user
            //The message to display is passed as the argument to the alert() function.

            isError = true;
            return null;
            //In programming, null is meant to represent the absence of a value.
            //In this case, if the user enters an invalid input,
            //you want to alert them and then return null to indicate that the function has failed.
        }
        calories += Number(currVal);
        //Remember that return ends the execution of a function. 
        // After your if block, you need to handle the logic for when the input is valid.
        //Because your if statement returns a value, you do not need an else statement.
        //The Number constructor is a function that converts a value to a number
        // If the value cannot be converted, it returns NaN which stands for "Not a Number"
    }
}