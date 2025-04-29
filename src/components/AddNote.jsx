import React, { useState } from 'react';
import { saveNotes, loadNotes } from '../Storage';

const AddNote = ({ onNavigate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [done, setDone] = useState(false); //  to show "Done" message

  // Why I chose useState + this submit handler.
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title,
      content,
    };

    const existingNotes = loadNotes();
    const updatedNotes = [...existingNotes, newNote];
    saveNotes(updatedNotes);
    setTitle('');
    setContent('');
    setDone(true); //  show message
    setTimeout(() => setDone(false), 2000); // hide after 2 seconds
  };

  return (
    <div className="form-container">
      <h1 className="welcome-message">Welcome to the Note Taking App</h1> {/* Welcome message */}
      <h2>Add a New Note</h2>
      <form onSubmit={handleSubmit} className="note-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <div className="button-row">
          <button type="submit">Add Note</button>
          <button type="button" onClick={() => onNavigate('view')}>
            View Notes
          </button>
        </div>
      </form>

      {done && <p className="done-message">✅ Note added successfully!</p>}
    </div>
  );
};

export default AddNote;
