import React, { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesLIst';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('add');

  return (
    <div className="App">
      {currentPage === 'add' ? (
        <AddNote onNavigate={setCurrentPage} />
      ) : (
        <NotesList onNavigate={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
