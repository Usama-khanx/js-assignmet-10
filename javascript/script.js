// JAVASCRIPT PRACTICE PROBLEMS - 2

// NOTE: HAR PROGRAM KLYE (JAHA ARRAY REQUIRED HA) ARRAY USER SE LE JIS ME 5 ELEMENTS HO

// 6. FIND THE SMALLEST NUMBER IN AN ARRAY

var arr = [];
for(var i=0; i<5; i++){
    var userInput = +prompt("Enter five numbers to create in array and then find its smallest")
    arr.push(userInput)
}
console.log(arr)
var smallestValue = arr[0];
for(var i=0; i<arr.length; i++){
    if(arr[i] < smallestValue){
        smallestValue = arr[i]
    }
}
console.log(smallestValue)
// 7. CONVERT CELCIUS TO FAHRENHEIT

// 8. CONVERT FAHRENHEIT TO CELCIUS

// 9. REVERSE AN ARRAY

// 10. CALCULATE AVERAGE OF AN ARRAY