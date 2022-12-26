import express from 'express';

const port = 8000;
const app = express();

app.all('/hello', (req, res, next) => {
    console.log('All');
    next();
});

const callback = (req, res, next) => {
    console.log('CB');
    next();
}

app.get('/hello', callback, (req, res) => {
   res.send('Hi!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});