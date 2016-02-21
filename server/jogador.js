var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jogadorSchema = new Schema({
  email: { type: String, required: true, unique: true },
  nome: { type: String, required: true },
  posicao: { type: String, required: true},
  numero: { type: Number, required: true},
  created_at: Date,
  updated_at: Date
});


jogadorSchema.methods.addstringnome = function() {
  this.name = this.name + 'função pre salvamento '; 
  return this.name;
};

var jogadorModel = mongoose.model('jogador', jogadorSchema);

module.exports = jogadorModel; 