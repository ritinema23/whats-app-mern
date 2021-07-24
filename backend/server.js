const express = require('express');
const mongoose = require('mongoose');
const Messages = require('./models/dbMessages.js')
//const Pusher = require('pusher')
require('dotenv/config');

const app = express();

// const pusher = new Pusher({
//     appId: '1081111',
//     key: 'd2505b2928f3972e9d9f',
//     secret: 'b565f63f5150acfaa137',
//     cluster: 'ap2',
//     encrypted: true
// });

// const db = mongoose.connection;

// db.once('open', () => {
//     console.log('change stream working...')
//     const msgcollection = db.collection('messagecontents');
//     const changeStream = msgcollection.watch();

//     changeStream.on('change', (change) => {
//         console.log(change)
//     })
// })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.connection_url, 
    { useNewUrlParser: true , useUnifiedTopology: true}, 
    () => {
    console.log('connected to database...')
})

app.get('/', (req, res) => {
    res.status(200).send('hello world')
})

app.get('/api/messages', (req, res) => {
    Messages.find((err, data) => {
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})

app.post('/api/messages', (req, res) => {
    // try {
    //     const dbmessage = req.body;
    //     Messages.create(dbmessage);
    //     res.send(dbmessage);
    // } catch (error) {
    //     res.status(400).json({msg: error})
    // }

    const dbmessage = req.body
    Messages.create(dbmessage, (err, data) => {
        if(err){
            res.status(400).send(err);
        }else{
            res.status(201).send(data);
        }
    })

})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})