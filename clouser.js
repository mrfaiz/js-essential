// all function in js is by default closure 
// A function which remember the variable name is a "clouser"

// Example 1 
var passed = 5;
let addTo = function () {
    var inner = 3;
    return passed + inner;
};

console.log(addTo()) // will print 8

var passed = 10;

console.log(addTo()) // will print 13

// Example : 2
// function inside another function is call clouser

function makeTimer(element, miliseconds) {
    var counter = 0;
    setInterval(timeIt, miliseconds);
    // This function also remembering the value variable counter
    function timeIt() {
        document.getElementById(element).innerHTML = counter;
        counter++;
    }
}

makeTimer("timer1", 500);
makeTimer("timer2", 400);
