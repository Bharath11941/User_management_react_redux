const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT || 3001;

// connectin database 
const dbconnect = require('./Configration/dbConfigration')
dbconnect.dbconnect();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin:"http://localhost:5173",
  methods:['GET','POST'],
  credentials:true
}))

const userRoutes = require('./Routes//UserRouter')
app.use('/',userRoutes)

const adminRoutes = require('./Routes/AdminRouter')
app.use('/admin',adminRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});