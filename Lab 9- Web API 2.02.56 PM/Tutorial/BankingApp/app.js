import express from 'express'
const app = express()
const port = 3000
let accounts = [
    {
        name : "Mohamed",
        accountNo : 123,
        balance : 300
    },
    {
        name : "Ahmed",
        accountNo : 5555,
        balance : 6666
    }
]

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.download('package.json')
})

app.get('/accounts', (req, res)=>{
    res.send(accounts)
})
app.delete('/accounts/:accountNo', (req, res)=>{
    const accountsNo = req.params.accountNo

    res.send(`you are deleting ${accountsNo}`)
})

app.put('/accounts', (req, res)=>{
    res.send('you are updating')
})

app.post('/accounts', (req, res)=>{
    res.send('you are adding this')
})

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
})


//
// npm i -g nodemon
// sudo npm i -g nodemon
//  nodemon app.js
//
