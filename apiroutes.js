// apiRoutes.js
const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Endpoint pour récupérer toutes les lignes de ma_table
router.get('/ma_table', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM ma_table');
    res.json(result.rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des données de ma_table', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données' });
  }
});

// Endpoint pour créer une nouvelle entrée dans ma_table
router.post('/ma_table', async (req, res) => {
  const { nom, age } = req.body;
  try {
    const result = await pool.query('INSERT INTO ma_table (nom, age) VALUES ($1, $2) RETURNING *', [nom, age]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erreur lors de la création d\'une nouvelle entrée dans ma_table', error);
    res.status(500).json({ error: 'Erreur lors de la création d\'une nouvelle entrée' });
  }
});

// Ajoutez d'autres routes pour la mise à jour et la suppression selon vos besoins

module.exports = router;
