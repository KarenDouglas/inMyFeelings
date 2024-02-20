const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./controllers')
const helpers = require('./utils/helpers')
const sequelize = require('./config/connection')
require('dotenv').config()
const session = require('express-session');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express()
const PORT = process.env.PORT || 3001

const hbs = exphbs.create({helpers})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

const sess = {
    secret: process.env.SECRET,
    cookie: {
        //5MINS
        maxAge: 60 * 60 * 1000,
        // httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
        httpOnly: true,
        // secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
        secure: false,
        // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
        sameSite: 'strict',
      },
      resave: false,
      saveUninitialized: true,
      // Sets up session store
      store: new SequelizeStore({
        db: sequelize,
      }),
 
};
app.use(session(sess));

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)

sequelize.sync({force: false }).then(()=> {
    app.listen(PORT, () => console.log(`Now listening as http://localhost:${PORT}/`))
})

