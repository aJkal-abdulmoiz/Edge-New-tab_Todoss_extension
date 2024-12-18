// Select the task input and notes container
const taskInput = document.getElementById('taskInput');
const notesContainer = document.querySelector('.notes-container');

// Create a textarea element for notes
const textarea = document.createElement('textarea');
textarea.style.width = '99%';
textarea.style.height = '500px';
textarea.placeholder = 'Write your notes here...'; // Placeholder text

// Load saved notes from localStorage, or use a placeholder if empty
textarea.value = localStorage.getItem('notes') || '';

// Append the textarea to the notes container
notesContainer.appendChild(textarea);

// Save the notes to localStorage on every input (supports pasted content)
textarea.addEventListener('input', () => {
  localStorage.setItem('notes', textarea.value);
});

// Save task input to localStorage when it changes
taskInput.addEventListener('input', () => {
  localStorage.setItem('todayTask', taskInput.value);
});

// Optional: Prevent styling issues when pasting external content
textarea.addEventListener('paste', (event) => {
  event.preventDefault();
  const text = (event.clipboardData || window.clipboardData).getData('text');
  textarea.value += text; // Append the pasted text
});

// Load the saved task for today (if any)
window.addEventListener('load', () => {
  const savedTask = localStorage.getItem('todayTask');
  if (savedTask) {
    taskInput.value = savedTask;
  }

  // Load saved notes (if any)
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    // Set the saved notes to the textarea
    textarea.value = savedNotes;
  }
});
