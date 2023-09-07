// console.log("Strating");

//     setTimeout(() => {
//         console.log("2 second timer");
//     },2000);

//     setTimeout(() => {
//         console.log("0 second timer");
//     },0);

// console.log("Stoping");


const request = require("request");
const url = 'http://api.weatherstack.com/current?access_key=6af5e10c2ff675ee48ab09a7203da892&query=london';

request({url : url} , (error , response) => {
    // console.log(response);

    const data = JSON.parse(response.body);
    console.log(data.current)
})
