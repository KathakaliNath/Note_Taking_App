import React, { useState } from 'react';
import { saveNotes } from '../Storage.js'; 
 

import './AddNote.css';

const AddNote = ({ onNoteAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!title || !content) return;

    const newNote = { title, content };
    saveNotes(newNote);
    onNoteAdded(); // Refresh the list
    setTitle('');
    setContent('');
  };

  return (
    <div className="add-note-container">
      <h2>Add a New Note</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        rows="4"
      />

      <button onClick={handleSubmit}>Add Note</button>
    </div>
  );
};

export default AddNote;
