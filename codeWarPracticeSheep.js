const stuff = ["sheep", "sheep", "sheep", "wolf", "sheep"];//I am here looking back
function warnTheSheep(queue) {
    let answer = "Pls go away and stop eating my sheep"
        let revArr = queue.reverse();
        console.log(revArr)

    for(let i = 0; i < revArr.length; i++){
    if(revArr[i] === "wolf"){
        answer = "Oi! Sheep number "+ i +"! You are about to be eaten by a wolf!"
    }
  }
  return answer;
}   


console.log(warnTheSheep(stuff));

function warnTheSheep(queue) {
    return queue.reverse()[0] === "wolf" 
    ? "Pls go away and stop eating my sheep" 
    : `Oi! Sheep number ${queue.reverse().indexOf('wolf')}! You are about to be eaten by a wolf!`
} 

