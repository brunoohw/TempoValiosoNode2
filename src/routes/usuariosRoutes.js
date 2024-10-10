const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../db');  // Conexão com o banco de dados

// Rota para verificar se o usuário existe com email e senha fornecidos
router.get('/usuarios/:email/:senha', (req, res) => {
  const { email, senha } = req.params;
  
  // Consultar o banco de dados para encontrar o usuário
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Erro ao acessar o banco de dados' });
    }
    
    if (results.length > 0) {
      // Comparar a senha fornecida com a senha no banco de dados
      bcrypt.compare(senha, results[0].password, (err, match) => {
        if (match) {
          // Se a senha estiver correta, retornar as informações do usuário
          res.json(results);
        } else {
          // Senha incorreta
          res.json([]);
        }
      });
    } else {
      // Usuário não encontrado
      res.json([]);
    }
  });
});

module.exports = router;

