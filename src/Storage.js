// src/Storage.js

const STORAGE_KEY = 'notes-app-data';

export const loadNotes = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Error loading notes:', err);
    return [];
  }
};

export const saveNotes = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (err) {
    console.error('Error saving notes:', err);
    throw err;
  }
};
