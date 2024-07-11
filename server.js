const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({});

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sessionConfiguration = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    // Sets up session store
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sessionConfiguration));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App now listening on http://localhost:${PORT}`));
});