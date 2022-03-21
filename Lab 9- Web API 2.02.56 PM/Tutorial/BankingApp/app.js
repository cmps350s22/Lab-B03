import express from 'express'

const app = express()
const port = 3000
let accounts = [
    {
        name: "Mohamed",
        accountNo: 123,
        balance: 300
    },
    {
        name: "Ahmed",
        accountNo: 444,
        balance: 6666
    },
    {
        name: "Ali",
        accountNo: 124,
        balance: 6666
    }
]

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.download('package.json')
})

app.get('/api/accounts', (req, res) => {
    res.send(accounts)
})
app.delete('/api/accounts/:accountNo', (req, res) => {
    const accountsNo = req.params.accountNo
    const totalAccounts = accounts.length
    accounts = accounts.filter(account => account.accountNo != accountsNo)

    if (totalAccounts == accounts.length)
        res.send(`account no ${accountsNo} does not exist`)
    else
        res.send(`you successfully deleted ${accountsNo}`)
})
app.post('/api/accounts', (req, res) => {
    const account = req.body
    accounts.push(account)
    res.send(`successfully added the account ${account.accounNo}`)
})

app.put('/api/accounts', (req, res) => {
    const updatedAccount = req.body
    const index = accounts.findIndex(account => account.accountNo == updatedAccount.accountNo)
    if(index < 0 )
        res.send(`unable to update account`)
    else  {
        accounts[index] = updatedAccount
        res.send(`successfully updated the account ${updatedAccount.accountNo}`)
    }
})


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})


//
// npm i -g nodemon
// sudo npm i -g nodemon
//  nodemon app.js
//
