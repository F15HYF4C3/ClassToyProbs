/*function switchItUp(number){
    //Write your own Code!
    
    switch(number) {
    case 0:
    console.log(number)
      return 'Zero'
          case 1:
      return 'One'
          case 2:
       return 'Two'
          case 3:
      return 'Three'
          case 4:
      return 'Four'
          case 5:
      return 'Five'
          case 6:
      return 'Six'
          case 7:
      return 'Seven'
          case 8:
      return 'Eight'
          case 9:
      return 'Nine'
        default:
      return 'Not a Number'  
      
  }}

console.log(switchItUp(3));
*/

//Ex Ternary:
function switchItUp(number){
    return number===0?'Zero':number===1?'One':number===2?'Two':number===3?'Three':number===4?'Four':number===5?'Five':number===6?'Six':number===7?'Seven':number===8?'Eight':number===9?'Nine':'undefined'
}

// Ex if statements
const mth = (number, operation) => {
    if(!operation){
      return number
    }
    return operation(number);
   }
   
   function zero(operation) {
    return mth(0, operation);
   }
   function one(operation) {
    return mth(1, operation);
   }
   function two(operation) {
    return mth(2, operation);
   }
   function three(operation) {
    return mth(3, operation);
   }
   function four(operation) {
    return mth(4, operation);
   }
   function five(operation) {
    return mth(5, operation);
   }
   function six(operation) {
    return mth(6, operation);
   }
   function seven(operation) {
    return mth(7, operation);
   }
   function eight(operation) {
    return mth(8, operation);
   }
   function nine(operation) {
    return mth(9, operation);
   }
   
   function plus(x) {
       return function(y) {
           return y + x;
       }
   }
   function minus(x) {
       return function(y) {
           return y - x;
       }
   }
   function times(x) {
       return function(y) {
           return y * x;
       }
   }
   function dividedBy(x) {
       return function(y) {
           return y / x;
       }
   }

//Ex TOYPROB CallBacks

//Instructor Examp:
function abc(num, operator){
    return operator ? operator(num) : num;
}


function zero(o) {
    return abc(0, o)
}
function one(o) {
    return abc(1, o)
}

function two(o) {
    return abc(2, o)
}

function three(o) {
    return abc(3, o)
}

function four(o) {
    return abc(4, o)
}

function five(o) {
    return abc(5, o)
}

function six(o) {
    return abc(6, o)
}

function seven(o) {
    return abc(7, o)
}

function eight(o) {return abc(8, o)}

function nine(o) {
    return abc(9, o)
}

function plus(num1) {
    return function (num2){
        return num1 + num2
    }
}
function minus(num1) {return function (num2){return num2 - num1}}
function times(num1) {return function (num2){return num1 * num2}}
function dividedBy(num1) {return function (num2){return Math.floor(num2 / num1)}}








//Student Examps
function zero(callback) {
    return (callback !== undefined) ?
        callback(0) : 0;
}
function one(callback) {
    return (callback !== undefined) ?
        callback(1) : 1;
}
function two(callback) {
    return (callback !== undefined) ?
        callback(2) : 2;
}
function three(callback) {
    return (callback !== undefined) ?
        callback(3) : 3;
}
function four(callback) {
    return (callback !== undefined) ?
        callback(4) : 4;
}
function five(callback) {
    return (callback !== undefined) ?
        callback(5) : 5;
}
function six(callback) {
    return (callback !== undefined) ?
        callback(6) : 6;
}
function seven(callback) {
    return (callback !== undefined) ?
        callback(7) : 7;
}
function eight(callback) {
    return (callback !== undefined) ?
        callback(8) : 8;
}
function nine(callback) {
    return (callback !== undefined) ?
        callback(9) : 9;
}
function plus(right) {
    return left => left + right;
}
function minus(right) {
    return left => left - right;
}
function times(right) {
    return left => left * right;
}
function dividedBy(right) {
    return left => parseInt(left / right);
}

//ex callBack
function zero(func) { 
    if (func === undefined) return 0
    else return func(0)
  }
  function one(func) {
    if (func === undefined) return 1
    else return func(1)
  }
  function two(func) {
    if (func === undefined) return 2
    else return func(2)
  }
  function three(func) {
    if (func === undefined) return 3
    else return func(3)
  }
  function four(func) {
    if (func === undefined) return 4
    else return func(4)
  }
  function five(func) {
  console.log(func);
    if (func === undefined) return 5
    else return func(5)
  }
  function six(func) {
    if (func === undefined) return 6
    else return func(6)
  }
  function seven(func) {
    if (func === undefined) return 7
    else return func(7)
  }
  function eight(func) {
    if (func === undefined) return 8
    else return func(8)
  }
  function nine(func) {
    if (func === undefined) return 9
    else return func(9)
  }
  
  function plus(number) {
  
    return function(current){
        return current + number
    }
  }
  function minus(number) {
    return function(current){
        return current - number
    }
  }
  function times(number) {
  console.log(number);
    return function(current){
    console.log(current* number)
      return current * number
    }
  }
  function dividedBy(number) {
    return function(current){
        return current / number
    }
  }