const axios = require('axios');

const stuff = () => {
    const baseUrl = `https://swapi.co/api`;
    return axios.get(`${baseUrl}/people`)
}

const prom = stuff()
// console.log(prom)   

prom
    .then((res)=>{
        const answer = (res.data.results.map((e)=>{
            return e.name
        }))
        console.log(answer);
    })