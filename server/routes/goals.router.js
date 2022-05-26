const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Get route that uses SQL query to 
// bring the user's goals to the GoalsPage
router.get('/', (req, res) => {
  const sqlQuery = `SELECT * FROM goals 
	WHERE user_id=$1 
	ORDER BY "inserted_at" ASC;
`;
const sqlValues = [req.user.id];
  pool.query(sqlQuery, sqlValues)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('ERROR: Get all goals', error);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
