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

if (process.argv.length === 5) {

    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
    })

    // Talleta henkilö tietokantaan
    person.save().then(result => {
        console.log('person saved')
        // Katkaise yhteys
        mongoose.connection.close()
    })
} else if (process.argv.length === 3) {
    
    Person.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}
