const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors({
    origin: [
        'http://localhost:3000' //comes from REACT
    ]
}))

app.use(express.json())

app.listen(8000);
console.log('listening on port 8000');