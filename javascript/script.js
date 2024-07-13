// JAVASCRIPT PRACTICE PROBLEMS - 2

// NOTE: HAR PROGRAM KLYE (JAHA ARRAY REQUIRED HA) ARRAY USER SE LE JIS ME 5 ELEMENTS HO

// 6. FIND THE SMALLEST NUMBER IN AN ARRAY

// var arr = [];
// for(var i=0; i<5; i++){
//     var userInput = +prompt("Enter five numbers to create in array and then find its smallest")
//     arr.push(userInput)
// }
// console.log(arr)
// var smallestValue = arr[0];
// for(var i=0; i<arr.length; i++){
//     if(arr[i] < smallestValue){
//         smallestValue = arr[i]
//     }
// }
// console.log(smallestValue)


// 7. CONVERT CELCIUS TO FAHRENHEIT

// 0  Degree Celsius =  32 Fahrenheit
// Formula	
// (0°C × 9/5) + 32 = 32°F

// var EnterDegree = +prompt("Enter Degree in celcuis")
// console.log(`The ${EnterDegree}℃ In forenheight is Equal to  ${(EnterDegree * 9 / 5) + 32}℉`)

// 8. CONVERT FAHRENHEIT TO CELCIUS
// Temperature 8 Fahrenheit = -13.3333 Degree Celsius
// Formula	
// (8°F − 32) × 5/9 = -13.33°C

var EnterForenheit = +prompt("Enter FAHRENHEIT")

    console.log(`The ${EnterForenheit}℉ is equal in celcius ${(EnterForenheit - 32) * 5 / 9}℃`)

// 9. REVERSE AN ARRAY

// var revreseArray = [];
// for(i=0; i<5; i++){
//     var toreverseInputArray = +prompt("Enter 5 numbers to creat its array and then reverse it")
//     revreseArray.push(toreverseInputArray)
// }
// console.log(revreseArray)

// // Yeh by default method hai lets we are try to with loops
// //console.log(revreseArray.reverse())

// var rev = [];
// for(var j = revreseArray.length-1; j >= 0; j--){
    
//     rev.push(revreseArray[j])
// }
// console.log(rev)


// 10. CALCULATE AVERAGE OF AN ARRAY

// var arrayAverage = [];
// for(var i=0; i<5; i++){
//     var inp = +prompt("Enter 5 number to create an array and find its average")
//     arrayAverage.push(inp)
// }
// console.log(arrayAverage)

// var sum = 0;
// var avg = 1;
// for(var i=0; i<arrayAverage.length; i++){
//     sum = sum + arrayAverage[i]
//     avg = avg + arrayAverage[i] / arrayAverage.length;
// }

// console.log(sum)
// console.log(avg)