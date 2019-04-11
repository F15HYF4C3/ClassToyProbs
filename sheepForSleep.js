var countSheep = function (num){

    const answer = [];
for(let i = 0; i<num; i++){
    answer.push(`${i+1} sheep...`)
}
    return answer.join('')
    }
    console.log(countSheep(4));