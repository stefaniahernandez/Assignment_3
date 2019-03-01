/*eslint-env browser*/

function displayGame() {
    "use strict";
    window.alert("Welcome to The Fortune Teller.");
}
displayGame();

function getRandomElement(arr) {
    "use strict";
    if (arr && arr.length) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}
getRandomElement();

function tellFortune() {
    "use strict";
    var numOfChildren, partnersName, geoLocation, jobTitle;
    numOfChildren = Math.floor(Math.random() * 10 + 1);
    partnersName = getRandomElement(["Pablo", "Sebastian", "Elio"]);
    geoLocation = getRandomElement(["Mexico City", "Berlin", "Tokyo", "Los Angeles"]);
    jobTitle = getRandomElement(["Software Engineer", "Teacher", "Writer", "Pilot"]);
    window.alert("You will be a " + jobTitle + " in " + geoLocation + " and married to " + partnersName + " with " + numOfChildren + " kids.");
}
tellFortune();

    