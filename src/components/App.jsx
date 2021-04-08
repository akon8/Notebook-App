
//import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea';


function App(){

  const [notes, setNotes] = useState([]);

  //ADD NOTE
  function addNote(newNote){
    setNotes(prev=>{
      return [...prev, newNote]; //return all notes using spread operator, including a new one that's been passed as a value through props of CreateArea
    }); //setNotes
  };//addNote(newNote)

  //DELETE NOTE
  function deleteNote(id){
    setNotes(prev=>{
      return prev.filter((noteItem, index)=>{
        return index !== id;
      });//filtering previous notes and returning all which index isn't equal to id of the note with clicked delete button
    });//setNotes
  };// deleteNote(id)

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((entry, index)=>{ //mapping through the array 'notes' and returning each element as a <Note/>
        return (
          <Note
            key={index}
            id={index}
            title={entry.title}
            content={entry.content}
            onDelete={deleteNote}
          />
        ); // returning Note
    })}
          <Footer />
      </div>
    ); // return
}; // App()

export default App;
