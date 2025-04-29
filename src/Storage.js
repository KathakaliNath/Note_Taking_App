const STORAGE_KEY = 'my_notes';

export function saveNotes(note) {
  const existing = loadNotes();
  existing.push(note);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (error) {
    alert('Error saving note. Storage might be full.');
  }
}

export function loadNotes() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    alert('Error loading notes.');
    return [];
  }
}
