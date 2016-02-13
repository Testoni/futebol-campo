var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  nome: { type: String, required: true },
  posicao: { type: String, required: true},
  created_at: Date,
  updated_at: Date
});


userSchema.methods.addstringnome = function() {
  // add some stuff to the users name
  this.name = this.name + 'função pre salvamento '; 

  return this.name;
};

var userModel = mongoose.model('user', userSchema);

module.exports = userModel; 