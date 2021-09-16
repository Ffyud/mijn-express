import express from 'express';

const app = express();
const PORT = 8181;

app.use('/', express.static('public'));

// app.get('/', (req, res) => {
//     res.send(`yolo`)
// });

app.listen(PORT, () => {
    console.log(`De server doet het op ${PORT}`);
});
