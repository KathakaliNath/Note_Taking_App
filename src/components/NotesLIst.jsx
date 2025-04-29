import React, { useEffect, useState } from 'react';
import { loadNotes } from '../Storage.js';
import './NotesList.css';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = loadNotes();
    setNotes(storedNotes);
  }, []);

  return (
    <div className="notes-list-container">
      <h2>Your Notes</h2>
      {notes.length === 0 ? (
        <p>No notes added yet.</p>
      ) : (
        notes.map((note, index) => (
          <div key={index} className="note-card">
            <h3>{note.title}</h3>
            <p>{note.content.slice(0, 100)}...</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
