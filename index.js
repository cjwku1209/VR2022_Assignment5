import path from 'path';
import express from 'express';
import morgan from 'morgan';
import { api } from './api/api';

// Websocket
const ws = require('ws');

// Setting up Mongodb
import session from 'express-session';
const MongoStore = require('connect-mongo');
import db from './server'
import {users} from "./models/users";
import {Controller} from "./models/controller"

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(morgan('common'));
app.use(api);

if (NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
	app.get("/*", (request, response) => {
		response.sendFile(path.join(__dirname, '../client/build/index.html'));
	});
}

function checkIfUserExist(uid) {
	users.findById(uid).then((user)=>{
		return true;
	}).catch((err)=>{
		return false;
	})
}

const wsServer = new ws.Server({ noServer: true });

wsServer.on('connection', socket => {
	console.log("New client connected");

	socket.on('message', (message)=>{
		let json = JSON.parse(message);
		let validUser = checkIfUserExist(json._id)
		if(validUser=== false){
			socket.send(JSON.stringify({ message: 'User does not exist' }))
		}
		Controller.find({user_id: json._id}).then((controller)=>{
			socket.send(JSON.stringify(controller[0]))
		})
		
	})

	socket.on("close", () => {
        console.log("The client has disconnected");
    });
})

const server = app.listen(PORT, () => {
	console.info(`Server listening at port ${PORT}.`);
});

// `server` is a vanilla Node.js HTTP server, so use
// the same ws upgrade process described here:
// https://www.npmjs.com/package/ws#multiple-servers-sharing-a-single-https-server
server.on('upgrade', (request, socket, head) => {
	wsServer.handleUpgrade(request, socket, head, socket => {
	  wsServer.emit('connection', socket, request);
	});
  });

// app.use(session({
// 	secret: 'secret',
// 	resave: false,
// 	saveUninitialized: false,
// 	store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/VR2022_HW5'}),
// 	cookie: { maxAge: 600 * 1000 },
// }))
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// app.use(users);

