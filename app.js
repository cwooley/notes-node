

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js')

// argv[2] is always the first command

const argv = yargs.argv

var command = yargs.argv._[0]

if (command === 'add'){
  //do add stuff
  if (argv.title && argv.body){
    notes.addNote(argv.title, argv.body)
  } else {
    console.log("please supply a title with --title and body with --body")
  }
} else if (command === 'list'){
  // do list stuff
  notes.listNotes()
} else if (command === 'read'){
  if (argv.title){
    notes.getNote(argv.title)
  } else {
    console.log("please supply a title with --title")
  }

}
else if (command === 'remove'){
  if (argv.title){
    notes.removeNote(argv.title)
  } else {
    console.log("please supply a title with --title")
  }
} else {
  console.log('command not recognized')
}
