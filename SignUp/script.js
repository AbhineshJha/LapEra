function validateForm(event) {
    event.preventDefault(); // Prevents the form from submitting by default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!name || !email || !number || !password || !confirmPassword) {
        alert('Please fill out all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return;
    }

    // Continue with form submission or additional actions
    alert('Form submitted successfully!');
}
