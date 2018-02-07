

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js')

// argv[2] is always the first command

const argv = yargs
.command('add', 'add a note', {
  title:{
    describe: "Title of your note",
    demand: true,
    alias: 't'
  },
  body:{
    describe: "Contents of your note",
    demand: true,
    alias: 'b'
  }
})
.command('list', 'list all notes')
.command('read', 'read a note', {
  title:{
    describe: "Title of your note",
    demand: true,
    alias: 't'
  },
})
.command('remove', 'remove a note', {
  title:{
    describe: "Title of your note",
    demand: true,
    alias: 't'
  },
})
.help()
.argv

var command = yargs.argv._[0]

if (command === 'add'){
  //do add stuff
    notes.addNote(argv.title, argv.body)
} else if (command === 'list'){
  // do list stuff
  notes.listNotes()
} else if (command === 'read'){
    notes.getNote(argv.title)
}
else if (command === 'remove'){
    notes.removeNote(argv.title)
} else {
  console.log('command not recognized')
}
