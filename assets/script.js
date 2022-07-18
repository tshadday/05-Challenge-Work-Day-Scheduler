var currentTime = moment().format("HH");
var saveButton9 = document.getElementById("saveHour9");
var saveButton10 = document.getElementById("saveHour10");
var saveButton11 = document.getElementById("saveHour11");
var saveButton12 = document.getElementById("saveHour12");
var saveButton13 = document.getElementById("saveHour13");
var saveButton14 = document.getElementById("saveHour14");
var saveButton15 = document.getElementById("saveHour15");
var saveButton16 = document.getElementById("saveHour16");
var saveButton17 = document.getElementById("saveHour17");

// Setting date
var today = moment().format("[Today is: ] dddd, MMMM Do YYYY");
$("#currentDay").text(today);

// Recall saved local inputs
function saveInput () {
    for (i = 9; i < 18; i++) {
        var savedInput = localStorage.getItem("hour "+i);
        var hour = "hour " + i;
        hour.textContent = savedInput
        console.log(savedInput)
        console.log(hour)
        //Not binding to page after save
    }
}
saveInput();

// Saving input form info locally to specific hour
saveButton9.addEventListener("click", function(event) {
    event.preventDefault();
    var textInput = document.querySelector("#hour9").value;
    localStorage.setItem("hour 9", textInput);
});

saveButton10.addEventListener("click", function(event) {
    event.preventDefault();
    var textInput = document.querySelector("#hour10").value;
    localStorage.setItem("hour 10", textInput);
});

saveButton11.addEventListener("click", function(event) {
    event.preventDefault();
    var textInput = document.querySelector("#hour11").value;
    localStorage.setItem("hour 11", textInput);
});

saveButton12.addEventListener("click", function(event) {
    event.preventDefault();
    var textInput = document.querySelector("#hour12").value;
    localStorage.setItem("hour 12", textInput);
});

saveButton13.addEventListener("click", function(event) {
    event.preventDefault();
    var textInput = document.querySelector("#hour13").value;
    localStorage.setItem("hour 13", textInput);
});

saveButton14.addEventListener("click", function(event) {
    event.preventDefault();
    var textInput = document.querySelector("#hour14").value;
    localStorage.setItem("hour 14", textInput);
});

saveButton15.addEventListener("click", function(event) {
    event.preventDefault();
    var textInput = document.querySelector("#hour15").value;
    localStorage.setItem("hour 15", textInput);
});

saveButton16.addEventListener("click", function(event) {
    event.preventDefault();
    var textInput = document.querySelector("#hour16").value;
    localStorage.setItem("hour 16", textInput);
});

saveButton17.addEventListener("click", function(event) {
    event.preventDefault();
    var textInput = document.querySelector("#hour17").value;
    localStorage.setItem("hour 17", textInput);
});


// Function to color code time slots
// function colorCode() {
//     getElementsByClassName("form-control").each(function() {
//        for (i = 9; i < 18; i++){
//             var blockTime = 9;
//             if (blockTime < currentTime) {
//                 style.backgroundColor = gray;
//             } else if (blockTime === currentTime) {
//                 style.backgroundColor = red;
//             } else {
//                 style.backgroundColor = green;
//             }
//         }
//     })
// }

//colorCode();

