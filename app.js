console.log('Starting app.')

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

// const sayHelloToUsername = `console.log(`Hello ${os.userInfo().username}`)`

console.log(notes.add(1,2))
// fs.appendFile('greetings.txt', sayHelloToUsername, ()=>{})
