const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/top', (req, res) => {
    res.send('Welcome to the Programming Language Recommendation App');
});

app.post('/api/1', (req, res) => {
    const { answer } = req.body;
    console.log('Received POST request for /api/1 with answer:', answer);
    if (!answer) {
        return res.status(400).json({ error: 'Answer is required' });
    }
    res.send({ message: `Received answer for question 1: ${answer}` });
});

app.post('/api/2', (req, res) => {
    const { answer } = req.body;
    console.log('Received POST request for /api/2 with answer:', answer);
    if (!answer) {
        return res.status(400).json({ error: 'Answer is required' });
    }
    res.send({ message: `Received answer for question 2: ${answer}` });
});

app.post('/api/3', (req, res) => {
    const { answer } = req.body;
    console.log('Received POST request for /api/3 with answer:', answer);
    if (!answer) {
        return res.status(400).json({ error: 'Answer is required' });
    }
    res.send({ message: `Received answer for question 3: ${answer}` });
});

app.post('/api/recommend', (req, res) => {
    const { question1, question2, question3 } = req.body;
    console.log('Received POST request for /api/recommend with answers:', question1, question2, question3);
    if (!question1 || !question2 || !question3) {
        return res.status(400).json({ error: 'All questions must be answered' });
    }

    let language = '';

    if (question1 === 'rule') {
        if (question2 === 'planned') {
            language = question3 === 'focused' ? 'Java' : 'C#';
        } else {
            language = question3 === 'focused' ? 'C++' : '-';
        }
    } else {
        if (question2 === 'planned') {
            language = question3 === 'focused' ? 'Ruby' : 'Swift';
        } else {
            language = question3 === 'focused' ? 'JavaScript' : 'Python';
        }
    }

    res.json({ language });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//soが変更