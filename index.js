import express from 'express';

const app = express();
const PORT = 8181;

app.use('/', express.static('public'));

// app.get('/test', (req, res) => {
//     res.send(`Test`)
// });

app.listen(PORT, () => {
    console.log(`De server doet het op ${PORT}`);
});
