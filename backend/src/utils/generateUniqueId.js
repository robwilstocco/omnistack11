const crypto = require('crypto');
// gera 4 bytes aleatorios para o id da ong
module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX'); 
}