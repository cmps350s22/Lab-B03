import express from 'express'
import router from './routes.js'

const app = express()
const port = 3000

app.use('/api', router)
app.use(express.static('public'))
app.use(express.json())

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})
