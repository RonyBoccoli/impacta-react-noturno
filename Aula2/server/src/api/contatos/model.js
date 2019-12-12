//criando o schema
const restful = require('node-restful');
//const {mongoose} = restful.mongoose; //referência ao mongoose do restful
const Schema = restful.mongoose.Schema;
const contatoSchema = new Schema({
        data: { type: Date },
        nome: { type: String },
        email: {type: String,required:true},
        telefone:{type:Number},
        assunto: { type: String }
});

module.exports = restful.model('contato',contatoSchema);