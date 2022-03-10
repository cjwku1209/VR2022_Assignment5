import mongoose from 'mongoose'
let Schema = mongoose.Schema;

let controller_schema = new Schema({
    fireRate: {type: Number, required: true},
    force: {type: Number, required: true},
    movement: {type: String, required: true},
    levitation: {type: Number, required: true},
    angleX: {type: Number, required: true},
    angleY: {type: Number, required: true},
    shoot: {type: Boolean, required: true},
    user_id: {type: String, required: false},
})

let Controller = mongoose.model("Controller", controller_schema);

exports.Controller = Controller;