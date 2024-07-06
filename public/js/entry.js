document.getElementById('startButton').addEventListener('click', () => {
    fetch('/api/top')
        .then(response => response.text())
        .then(data => {
            console.log(data);
            window.location.href = 'question1.html';
        });
});
