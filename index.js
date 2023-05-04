const app = require('./src/app')
const { conn } = require('./src/db');

const PORT = process.env.PORT

conn.sync({force: false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server on port ${PORT}`)
    })
})