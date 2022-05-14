const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(express.static('__dirname'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})