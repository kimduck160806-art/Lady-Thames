document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    // Convert both the entered password and the correct password to lowercase
    const password = document.getElementById('password-input').value.toLowerCase();
    const correctPassword = 'lady';

    if (password === correctPassword) {
        // Redirect to the next page if the password is correct
        window.location.href = 'next-page.html';
    } else {
        alert('Password incorrect. Please try again.');
        document.getElementById('password-input').value = ''; // Clear the input field
    }
});