const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


let db,
    dbName = 'journal'

MongoClient.connect("mongodb+srv://Jlewis1:4b3IS5gDGeCHs4U4@cluster0.xydqopj.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', async (request, response) => {
    const journalItems = await db.collection('journal').find().toArray()
    response.render('index.ejs', { items: journalItems })
})

app.get('/journal.ejs', async (request, response) => {
    let journalItems = await db.collection('journal').find().toArray()
    journalItems = journalItems.sort((x, y) => {
        let xtemp = x.date.split('-')
        let ytemp = y.date.split('-')
        let xDate = new Date(xtemp[2], xtemp[0], xtemp[1])
        let yDate = new Date(ytemp[2], ytemp[0], ytemp[1])
        return xDate.getTime() - yDate.getTime()
    })

    response.render('journal.ejs', { items: journalItems })
})

app.post('/addJournal', (request, response) => {
    const bp = `${request.body.bpNum1}/${request.body.bpNum2}`
    const hr = `${request.body.hrNum}`
    const ex = request.body.exCheck == "on" ? true : false
    const journal = request.body.journal
    const date = `${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getFullYear()}`

    db.collection('journal').find({ date: date }, { $exists: true }).toArray((err, docs) => {
        if (docs.length) {
            console.log(docs)
            response.status(400).json({
                error: 'Entry exists for this date. Please delete previous entry if you would like to submit a new entry'
            })
        }
        else {
            db.collection('journal').insertOne({ date: date, bloodPressure: bp, heartRate: hr, exercise: ex, journal: journal })
                .then(result => {
                    console.log('Journal Entry Added')
                    response.redirect('/')
                })
        };
    })
})

app.delete('/deleteItem', (request, response) => {
    db.collection('journal').deleteOne({ date: request.body.itemFromJS })
        .then(result => {
            console.log('Entry Deleted')
            response.json('Entry Deleted')
        })
        .catch(error => console.error(error))

})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})