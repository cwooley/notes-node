


const fs = require('fs');

var addNote = (title, body) => {
  var notes = []
  try {
       notes = JSON.parse(fs.readFileSync('notes.json'))
  } catch (e) {

  }
  const note = {
    title,
    body
  }

  var dupNotes = notes.filter((note)=> note.title === title)
  if (dupNotes.length < 1){
    notes.push(note)
    fs.writeFileSync('notes.json', JSON.stringify(notes));
  } else {
    console.log("Error: Cannot have two notes with the same title.")
  }

}

var listNotes = () => {
  var notes = JSON.parse(fs.readFileSync('notes.json'))
  notes.forEach((note)=>{
    console.log(note.title)
  })
}

var getNote = (title) => {
  var notes = JSON.parse(fs.readFileSync('notes.json'))
  var theNote = notes.find((note)=> note.title === title)
  if (theNote) {
    console.log(theNote.title)
    console.log(theNote.body)
  } else {
    console.log("couldn't find note with title", title)
  }

}

var removeNote = (title) => {
  var notes = JSON.parse(fs.readFileSync('notes.json'))
  notes = notes.filter((note)=>{
    return note.title !== title
  })
  fs.writeFileSync('notes.json', JSON.stringify(notes));
}

module.exports =  {
  addNote,
  listNotes,
  getNote,
  removeNote,
}
