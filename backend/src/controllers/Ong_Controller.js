// pacote para criptografia, mas gera string aleatória
const crypto = require('crypto');
const connection = require('../database/connection');

/**
 * tipos de parâmetros
    query params 'query': parâmetros nomeados enviados na rota após "?" (filtros, paginação); para mais de um 
    parâmetro, usar "&"
    route params 'params': parâmetros utilizados para identificar recursos ":id"
    request body 'body': corpo da requisição utilizado para criar ou alterar recursos
 */


module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create (request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    }
}