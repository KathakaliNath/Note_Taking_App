import React, { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesLIst';

function App() {
  const [view, setView] = useState('add');
  const [refresh, setRefresh] = useState(false);

  const handleNoteAdded = () => {
    setRefresh(!refresh); // toggle to refresh view
    setView('view');
  };

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px' }}>
        <button onClick={() => setView('add')}>Add Note</button>
        <button onClick={() => setView('view')}>View Notes</button>
      </nav>

      {view === 'add' ? (
        <AddNote onNoteAdded={handleNoteAdded} />
      ) : (
        <NotesList key={refresh} />
      )}
    </div>
  );
}

export default App;
