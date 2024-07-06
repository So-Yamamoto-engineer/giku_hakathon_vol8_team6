const question1 = localStorage.getItem('question1');
const question2 = localStorage.getItem('question2');
const question3 = localStorage.getItem('question3');

fetch('/api/recommend', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question1, question2, question3 })
})
.then(response => response.json())
.then(data => {
    if (data.error) {
        document.getElementById('error').innerText = data.error;
    } else {
        document.getElementById('result').innerText = data.language;
    }
})
.catch(error => {
    document.getElementById('error').innerText = 'An error occurred. Please try again.';
});

document.getElementById('retryButton').addEventListener('click', () => {
    // ローカルストレージをクリア
    localStorage.clear();
    // エントリーページ（TOPページ）にリダイレクト
    window.location.href = 'index.html';
});
