path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const app = express()
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

//load config
dotenv.config({path: './config/config.env'})

//passport config
require('./config/passport')(passport)

//handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

//sessions
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
})
)

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/auth', require('./routes/auth'))
app.use('/', require('./routes/index'))
app.use('/data', require('./routes/data'))

const port = process.env.PORT || 3000

const start = async () => {
  try {
      await connectDB(process.env.MONGO_URI)
      app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
      console.log(error);
  }
}
start()