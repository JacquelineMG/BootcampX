SELECT 
  students.name,
  COUNT(assistance_requests.*) AS total_assistance
FROM assistance_requests
JOIN students ON student_id = students.id
WHERE name = 'Elliot Dickinson'
GROUP BY students.name;
