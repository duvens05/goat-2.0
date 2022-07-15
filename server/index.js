const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {getshoe,createsneaker,deletebtn}=require('./controller')

app.get('/api/sneakers',getshoe)
app.post('/api/sellsneakers',createsneaker)
app.delete('/api/delete/:id',deletebtn)


app.listen(4004, () => {console.log('Listening on port 4004')})