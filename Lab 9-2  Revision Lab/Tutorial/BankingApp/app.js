/*
    Steps
    1. create the package.json
    => npm init -y
    2.install the following packages in the same line
    => npm i express morgan fs-extra
    -express for creating our sever
    -morgan is for logging
    -fs-extra is for reading and writing to json file
    3. If I only share the project you should just type
    => npm i
    4. if you want to assign a port in your system
    ->window SET PORT = 3000
    ->mac EXPORT PORT = 3000
 */
import express from 'express';
const app = express()

//every app run on specific port number
//Godaddy
const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`server listening on http://localhost:${port}`)
})
