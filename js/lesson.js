// Select the textarea and button elements
const notesTextarea = document.getElementById('notes');
const saveButton = document.getElementById('saveNotes');

// Function to save notes to localStorage
function saveNotes() {
  const notes = notesTextarea.value;
  localStorage.setItem('studentNotes', notes);
  alert('Notes saved!');
}

// Function to load notes from localStorage
function loadNotes() {
  const savedNotes = localStorage.getItem('studentNotes');
  if (savedNotes) {
    notesTextarea.value = savedNotes;
  }
}

// Event listener for the save button
saveButton.addEventListener('click', saveNotes);

// Load saved notes when the page loads
window.onload = loadNotes;
