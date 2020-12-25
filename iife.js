/**
 * IIFE = imediately invoke function expression
 */

var hello = "hello1";
(function foo(){
    var hello = "hello";
    console.log(hello);
})();
console.log(hello);


for(let i = 0; i<5; i++){
    (function IIFE(){
        var j = i;
        console.log(j);
    })();
}

for(let i=1; i<=5; i++){
    setTimeout(() => {
        console.log("i: "+i);
    }, i*1000);
}