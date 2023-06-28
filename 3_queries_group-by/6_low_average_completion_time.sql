SELECT 
  students.name AS student,
  AVG(assignment_submissions.duration) AS average_assigment_duration,
  AVG(assignments.duration) AS average_estimated_duration
FROM assignments
JOIN assignment_submissions ON assignment_id = assignments.id
JOIN students ON student_id = students.id
WHERE students.end_date IS NULL
GROUP BY student
HAVING AVG(assignment_submissions.duration) < AVG(assignments.duration)
ORDER BY average_assigment_duration;


