import express from 'express';
import {users} from "../models/users";
import {Controller} from "../models/controller"
export const api = express.Router();

function checkIfUserExist(uid) {
	users.findById(uid).then((user)=>{
		return true;
	}).catch((err)=>{
		return false;
	})
}


api.get('/api', (request, response) => {
	response.status(200);
	response.send(JSON.stringify(api.stack.filter(stack => stack.route && stack.route.path).map(stack => ({
		path: stack.route.path,
		method: stack.route.stack[0].method
	}))));
});

api.post('/api/create-user', (request, response)=>{
	const user = new users({
		firstName: request.body.firstName,
		lastName: request.body.lastName,
		username: request.body.username,
		password: request.body.password,
		email: request.body.email
	});

	const promise = user.save();
	promise.then((user)=>{
		const shootController = new Controller({
			fireRate: 0.5,
			force: 1000,
			levitation: 0,
			angleX: 0,
			angleY: 0,
			shoot: false,
			movement: "None",
			user_id: user._id
		})
		const controllerPromise = shootController.save();
		controllerPromise.then((controller)=>{
			response.status(201).json({
				success: true,
				message: "Account Created"
			});
		}).catch((err)=>{
			throw err
		})
	}).catch((err)=>{
		response.status(403).json({
			success: false,
			message: err.message
		});
	})
})

api.post('/api/login', (request, response)=>{

	users.findOne({username: request.body.username}).then(function(user) {
		if(!user) {
			throw new Error('This username does not exist')
		}
		else{
			user.comparePassword(request.body.password, function(err, isMatch) {
				if (err) throw err;
				else{
					if(isMatch){
						response.status(201).json({
							success: true,
							user: user,
							_id: user._id,
							message: "Login Successful"
						});
					}
					else{
						response.status(400).json({
							success: false,
							message: "Wrong Password"
						});
					}
				}
			});
		}
	}).catch(function(err) {
		response.status(400).json({
			success: false,
			message: err.message
		});
	})
})

api.post('/api/update-controller/:_id', (request, response)=>{
	let validUser = checkIfUserExist(request.params._id)
	if(validUser=== false){
		response.status(400).json({
			success: false,
			message: "User does not exist"
		});
	}
	Controller.findOneAndUpdate({user_id: request.params._id}, request.body).then((controller)=>{
		response.status(201).json({
			success: true,
			controller: request.body,
			message: "Update Successful"
		});
	})
})

api.post('/api/controller', (request, response)=>{
	let validUser = checkIfUserExist(request.body._id)
	if(validUser=== false){
		response.status(400).json({
			success: false,
			message: "User does not exist"
		});
	}
	Controller.find({user_id: request.body._id}).then((controller)=>{
		response.status(201).json({
			success: true,
			controller: controller,
			message: "Fetch controller successful"
		});
	})
})

api.all('/api/*', (request, response) => {
	response.sendStatus(404);
});
