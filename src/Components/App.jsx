import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, notesList] = useState([]);

  useEffect(() => {
    const notesDate=JSON.parse(localStorage.getItem('notes'));

    if (notesDate) {
      notesList(notesDate);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function addNotes(note, index) {
    return (
      <Note key={index} id={index} title={note.title} content={note.content} delFunction={deleteNote}/>
    );
  }

  function createNote(title, content) {
    const note = { title: title, content: content };
    
    notesList(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(index) {
      notesList(prevNotes => {
          return prevNotes.filter((note,id)=>{
              return id!==index;
          });
      });
  }

  return (
    <div>
      <Header />
      <CreateArea addButton={createNote} />

      {notes.map(addNotes)}

      <Footer />
    </div>
  );
}

export default App;
