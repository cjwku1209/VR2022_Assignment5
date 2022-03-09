import path from 'path';
import express from 'express';
import morgan from 'morgan';
import { api } from './api/api';

// Setting up Mongodb
import session from 'express-session';
const MongoStore = require('connect-mongo');
import db from './server'
import {users} from "./models/users";


const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(morgan('common'));
app.use(api);

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: false,
	store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/VR2022_HW5'}),
	cookie: { maxAge: 600 * 1000 },
}));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(users);

if (NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
	app.get("/*", (request, response) => {
		response.sendFile(path.join(__dirname, '../client/build/index.html'));
	});
}

app.listen(PORT, () => {
	console.info(`Server listening at port ${PORT}.`);
});
