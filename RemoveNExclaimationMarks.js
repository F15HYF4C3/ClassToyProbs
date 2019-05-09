// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

let array = "!!Hi !!hi!!! !hi";
function remove(s,n){
    return s.split('').reduce((r, e, i)=>{
        if(e !== "!"){
            r.push(e)
        }else if(e=== "!" && n > 0){
            n--
        }else{
            r.push(e)
        }
        return r
    }, []).join('')
  }

  function keysAndValues(data){
    console.log(Object.keys(data))
    return Object.keys(data).reduce((r, e)=>{
        console.log(e)
        r[0].push(e)
        console.log(data[e])
        r[1].push(data[e])
        console.log(r)
        return r
    },[[],[]])
  }