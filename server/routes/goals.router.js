const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route that uses SQL query to 
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

// POST route that uses SQL query to insert 
// a new goal into the db
router.post('/', (req, res) => {
  console.log('req.body:', req.body);
  const insertGoalQuery =`
  INSERT INTO "goals" ("text", "user_id")
  VALUES ($1, $2)
  RETURNING "id";
  `;
  pool.query(insertGoalQuery, [
    req.body.text, req.user.id
  ])
  .then((result) => {
    console.log('New Goal Id:', result.rows[0].id); 
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  });

});


router.delete('/:id', (req, res) => {
  const sqlText = `
    DELETE FROM goals
      WHERE id = $1
  `
  const sqlValues = [
    req.params.id
  ]
  pool.query(sqlText, sqlValues)
  .then((dbRes) => {
    res.sendStatus(200);
  })
  .catch((dbErr) => {
    console.error('DELETE database error', dbErr)
    res.sendStatus(500);
  })
})

module.exports = router;
