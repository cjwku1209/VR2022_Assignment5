import express from 'express';
import {users} from "../models/users";
export const api = express.Router();

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
	promise.then(()=>{
		response.status(201).json({
			success: true,
			message: "Account Created"
		});
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

api.all('/api/*', (request, response) => {
	response.sendStatus(404);
});
