const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Function to apply the saved theme
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.style.backgroundColor = '#212121'; // Dark mode background color
        modeToggle.checked = true;
    } else {
        body.style.backgroundColor = '#e8e8e8'; // Light mode background color
        modeToggle.checked = false;
    }
}

// Event listener to toggle the theme and save the preference
modeToggle.addEventListener('change', function() {
    if (modeToggle.checked) {
        body.style.backgroundColor = '#212121'; // Dark mode background color
        localStorage.setItem('theme', 'dark');
    } else {
        body.style.backgroundColor = '#e8e8e8'; // Light mode background color
        localStorage.setItem('theme', 'light');
    }
});

// Apply the saved theme when the page loads
applySavedTheme();
