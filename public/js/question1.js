document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', (event) => {
        const answer = event.target.getAttribute('data-answer');
        localStorage.setItem('question1', answer);
        fetch('/api/1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ answer })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                document.getElementById('error').innerText = data.error;
            } else {
                window.location.href = 'question2.html';
            }
        })
        .catch(error => {
            console.error('Fetch error:', error); 
            document.getElementById('error').innerText = 'An error occurred. Please try again.';
        });
    });
});
