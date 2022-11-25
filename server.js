const express = require('express')
const app = express()
const PORT = 8000

const ninjas = {
    'naruto':{
        'clan': 'Uzumaki',
        'village': "Hidden Leaf Village",
        'sensi': "Kakashi Sensi"
    },
    'sasuke':{
        'clan': 'Uchiha',
        'village': "Hidden Leaf Village",
        'sensi': "Kakashi Sensi"
    },
    'sakura':{
        'clan': 'Haruno',
        'village': 'Hidden Lean Village',
        'sensi': "Kakashi Sensi"
    }
}

app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:ninjaName', (req, res)=>{
    const ninjasName = req.params.ninjaName.toLowerCase()
    if(ninjas[ninjasName]){
        res.json(ninjas[ninjasName])
    }else{
        res.json(ninjas['sakura'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}!`)
})