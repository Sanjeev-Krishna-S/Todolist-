document.getElementById('loginButton').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
        // Display a success message
        alert('Login was successful.');

        // Redirect to a new page after a delay, applying a callback function
        setTimeout(function() {
            redirectToHomePage('home.html');
        }, 1000); // 1000 milliseconds (1 second) delay
    } else {
        // Display an error message
        alert('Invalid username or password. Please give valid credentials.');
    }
});

function redirectToHomePage(url) {
    window.location.href = url;
}
