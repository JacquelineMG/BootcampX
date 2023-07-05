const pool = require('./connections.js');

const cohortName = process.argv[2] || 'JUL02';

const queryString = `
SELECT 
    DISTINCT teachers.name AS teacher,
    cohorts.name AS cohort
  FROM teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE $1
  ORDER BY teacher;
`;

const values = [`%${cohortName}%`];

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(response => {
    console.log(`${response.cohort}: ${response.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));