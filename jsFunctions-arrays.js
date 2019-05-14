// Write a JavaScript function to merge two arrays and removes all duplicates elements.
var array1 = [1, 2, 3]; 
var array2 = [2, 30, 1]; 
console.log(merge_array(array1, array2));
[3, 2, 30, 1]

function merge_array(a, b){
const c = a.concat(b);
for(let i=0; i<c.length; i++){
    for(let d=i+1; d<c.length; d++){
        if(c[i]===c[d]){
            c.splice(d--, 1);
            }
        }
    }
    return c;
}
const array3 = merge_array(array1, array2);





// Write a JavaScript function to get a random item from an array

const rando = array3[Math.floor(Math.random()*array3.length)];
console.log(rando);





// Write a JavaScript function to move an array element from one position to another.
// Test Data :
console.log(move([10, 20, 30, 40, 50], 0, 2));
[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
[10, 20, 30, 50, 40]

function move(array, i, q){
    while(i<0){
        i += array.length;
    }
    while(q<0){
        q += array.length
    }
    if(q>=array.length){
        const newArr = q - array.length +1; 
        while(newArr--){
            array.push(undefined);
        }
    }
    array.splice(q, 0, array.splice(i, 1)[0]);
    return array;
}