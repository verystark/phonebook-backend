const mongoose = require('mongoose')

// Tarkistaa komentorivin komennon että siinä on node mongo.js salasana
if (process.argv.length < 3) {
    console.log('too little arguments')
    process.exit(1)
}

const password = process.argv[2]

// Mongodb atlas uri osoite
const url = `mongodb+srv://tuomaspaloheimo05_db_user:${password}@phonebook.sdehugn.mongodb.net/phonebook?retryWrites=true&w=majority&appName=phonebook`

mongoose.set('strictQuery', false)
// Muodostaa yhteyden tietokantaan ja määritellään että käytetään vain IPv4 osoitetta
mongoose.connect(url, { family: 4 })

// Luodaan skeema eli määritelmä miten henkilöt tallennetaan tietokantaan
const personSchema = new mongoose.Schema({
    id: String,
    name: String,
    number: String,
})

// määritellään kokoelma ja se millaisia dokumentteja tulee
const Person = mongoose.model('Person', personSchema)

const person = new Person({
    id: '88',
    name: 'Patrick Kane',
    number: '0408804884',
})

// Talleta henkilö tietokantaan
person.save().then(result => {
    console.log('person saved')
    // Katkaise yhteys
    mongoose.connection.close()
})