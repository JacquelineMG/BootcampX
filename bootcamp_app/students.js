const pool = require('./connections.js');

const cohort_month = process.argv[2];
const result_limit = process.argv[3];

pool.query(`
SELECT students.id AS student_id, students.name AS name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${cohort_month}%'
LIMIT ${result_limit || 10};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`)
  })
})
.catch(err => console.error('query error', err.stack));