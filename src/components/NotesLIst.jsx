// src/components/NotesList.jsx

import React, { useEffect, useState } from 'react';
import { loadNotes } from '../Storage';

// Why useEffect to sync storage → state.
const NotesList = ({ onNavigate }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = loadNotes();
    setNotes(storedNotes);
  }, []);

  return (
    <div className="notes-container">
      <div className="notes-header">
        <h2>Your Notes</h2>
        <button className="nav-button" onClick={() => onNavigate('add')}>
          Add Note
        </button>
      </div>

      {/* Total Notes Counter */}
      <p>{notes.length === 0 ? 'No notes available.' : `Total Notes: ${notes.length}`}</p>

      {notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        <div className="notes-list">
          {notes.map((note) => (
            <div key={note.id} className="note-item">
              <div className="note-title">
                <h3>{note.title}</h3>
              </div>
              <div className="note-content">
                <p>{note.content.slice(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
