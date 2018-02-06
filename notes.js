


const fs = require('fs');

var fetchNotes = ()=>{
  var notes = []
  try {
       notes = JSON.parse(fs.readFileSync('notes.json'))
  } catch (e) {

  }
  return notes
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes()
  const note = {
    title,
    body
  }

  var dupNotes = notes.filter((note)=> note.title === title)
  if (dupNotes.length < 1){
    notes.push(note)
    saveNotes(notes)
  } else {
    console.log("Error: Cannot have two notes with the same title.")
  }

}

var listNotes = () => {
  var notes = fetchNotes()
  notes.forEach((note)=>{
    console.log(note.title)
  })
}

var getNote = (title) => {
  var notes = fetchNotes()
  var theNote = notes.find((note)=> note.title === title)
  if (theNote) {
    console.log(theNote.title)
    console.log(theNote.body)
  } else {
    console.log("couldn't find note with title", title)
  }

}

var removeNote = (title) => {
  var notes = fetchNotes()
  notes = notes.filter((note)=>{
    return note.title !== title
  })
  saveNotes(notes)
}

module.exports =  {
  addNote,
  listNotes,
  getNote,
  removeNote,
}
