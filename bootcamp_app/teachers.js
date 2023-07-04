const pool = require('./connections.js');

const cohort_month = process.argv[2];

pool.query(`
  SELECT 
    DISTINCT teachers.name AS teacher,
    cohorts.name AS cohort
  FROM teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name = '${cohort_month || 'JUL02'}'
  ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(response => {
    console.log(`${response.cohort}: ${response.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));