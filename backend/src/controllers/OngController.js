const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {

    async index (require,response) { // nome index é utilizado geralmente para a função de listagem.
        const ongs = await connection ('ongs').select ('*');
        return response.json(ongs);
    },

    async create (request, response){
        const {name, email, whatsapp,city,uf} = request.body; // request.body, pega as informações do corpo da pgn!

        const id = generateUniqueId();

        await connection('ongs').insert({ //insere na tabela 'ongs'
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id });
    }
};