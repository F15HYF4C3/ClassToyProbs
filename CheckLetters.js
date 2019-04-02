// Write a function that checks if the letters in the second string are present in the first:

// letterCheck(["trances", "nectar"]) // true
// letterCheck(["compadres", "DRAPES"]) // true
// letterCheck(["parses", "parsecs"]) //false
// Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.

// function letterCheck(arr) {
//     return arr[1].length === arr[0].toLowerCase().split('').reduce((reducer, element)=>{

//         const condition1 = arr[1].toLowerCase().split('').includes(element);
//         console.log(condition1)
//         const condition2 = !reducer.includes[element]

//         if(condition1 && condition2){
//             reducer.push(element)
//         }
//         return reducer;
//     }, []).length
// }

function letterCheck(arr) {
    const arr2 = arr[1].toLowerCase().split('');
    console.log(arr2)
    return arr2.every(x => {
        console.log(arr[0])
        return arr[0].toLowerCase().includes(x)
    });
  }

console.log(letterCheck(["ssssss", "ssas"]))