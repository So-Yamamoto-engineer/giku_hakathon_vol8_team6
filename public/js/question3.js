document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', (event) => {
        const answer = event.target.getAttribute('data-answer');
        localStorage.setItem('question3', answer);
        fetch('/api/3', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ answer })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('error').innerText = data.error;
            } else {
                window.location.href = 'result.html';
            }
        })
        .catch(error => {
            document.getElementById('error').innerText = 'An error occurred. Please try again.';
        });
    });
});
