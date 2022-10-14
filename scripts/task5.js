/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date

const today = new Date();

// Step 2: Declare another variable to hold the day of the week

const weekDay = today.toLocaleString('default', { weekday: 'long' });

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

const todayValue = today.getDay();

// Step 4: Declare a variable to hold a message that will be displayed

let message = ''

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

if (todayValue > 0 && todayValue < 6) {
    message = 'Hang in there!';
}


// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
    message = 'Woohoo! It is the weekend!';
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

let newMessage = ''

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

switch (todayValue) {
    case 0:
        newMessage = 'Sunday';
        break;
    case 1:
        newMessage = 'Monday';
        break;
    case 2:
        newMessage = 'Tuesday';
        break;
    case 3:
        newMessage = 'Wednesday';
        break;
    case 4:
        newMessage = 'Thursday';
        break;
    case 5:
        newMessage = 'Friday';
        break;
    case 6:
        newMessage = 'Saturday';
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

document.getElementById('message1').innerHTML = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

document.getElementById('message2').innerHTML = newMessage;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples

const templesList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

const templesOutput = document.querySelector('#temples');

function output(temples) {

    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let h4_1 = document.createElement('h4');
        let img = document.createElement('img');

        h3.innerHTML = temple.templeName;
        h4.innerHTML = temple.location;
        h4_1.innerHTML = temple.dedicated;
        img.src = temple.imageUrl;
        img.setAttribute('alt', `${temple.templeName}`);


        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h4_1);
        article.appendChild(img);

        templesOutput.appendChild(article)
    })
};


// Step 3: Create another function called getTemples. Make it an async function.

const templeURL = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';

async function getTemples() {
    // Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
    const response = await fetch(templeURL);
    // Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
    if (response.ok) {
        data = await response.json();
        // Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
        output(data)
    }
}

getTemples()

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

function reset() {
    document.getElementById('temples').innerHTML = ''
}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples


function sortBy() {
    reset();

    selectedValue = document.querySelector('#sortBy').value;

    if (selectedValue == 'templeNameAscending') {
        output(data.sort((first, next) => {
            if (first.templeName > next.templeName)
                // sort b before a
                return 1;
            else if (first.templeName < next.templeName) {
                // a and b different but unchanged (already in the correct order)
                return -1;
            } else return 0; // a and b are equal
        }));
    }

    else if (selectedValue == 'templeNameDescending') {
        output(data.sort((first, next) => {
            if (first.templeName < next.templeName)
                // sort b before a
                return 1;
            else if (first.templeName > next.templeName) {
                // a and b different but unchanged (already in the correct order)
                return -1;
            } else return 0; // a and b are equal
        }));
    }
}
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

document.querySelector('#sortBy').addEventListener('change', sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
function filterBy() {
    reset();

    selectedValue = document.querySelector('#filterBy').value;

    if (selectedValue == 'a-f') {
        output(data.filter((temple) => {
            if ((temple.templeName.startsWith('A')) || (temple.templeName.startsWith('B')) || (temple.templeName.startsWith('C')) || (temple.templeName.startsWith('D')) || (temple.templeName.startsWith('E')) || (temple.templeName.startsWith('F'))) {
                return temple
            }
        }))
    }
    else if (selectedValue == 'g-l') {
        output(data.filter((temple) => {
            if ((temple.templeName.startsWith('G')) || (temple.templeName.startsWith('H')) || (temple.templeName.startsWith('I')) || (temple.templeName.startsWith('J')) || (temple.templeName.startsWith('K')) || (temple.templeName.startsWith('L'))) {
                return temple
            }
        }))
    }
    else if (selectedValue == 'm-r') {
        output(data.filter((temple) => {
            if ((temple.templeName.startsWith('M')) || (temple.templeName.startsWith('N')) || (temple.templeName.startsWith('O')) || (temple.templeName.startsWith('P')) || (temple.templeName.startsWith('Q')) || (temple.templeName.startsWith('R'))) {
                return temple
            }
        }))
    }
    else if (selectedValue == 's-z') {
        output(data.filter((temple) => {
            if ((temple.templeName.startsWith('S')) || (temple.templeName.startsWith('T')) || (temple.templeName.startsWith('U')) || (temple.templeName.startsWith('V')) || (temple.templeName.startsWith('W')) || (temple.templeName.startsWith('X')) || (temple.templeName.startsWith('Y')) || (temple.templeName.startsWith('Z'))) {
                return temple
            }
        }));
    }
}

document.querySelector('#filterBy').addEventListener('change', filterBy);