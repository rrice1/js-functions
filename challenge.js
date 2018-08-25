let bandNumber = 0;

const takeNumber = (bandName) => {
    bandNumber += 1;
    printToDom(`<h2>${bandNumber}. ${bandName}</h2>`,'funChallenge');
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint
    };


takeNumber("Galactic Scum") // This should display "1. Galactic Scum" in the DOM
takeNumber("Underdogs") // This should display "2. Underdogs" in the DOM