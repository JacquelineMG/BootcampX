SELECT 
  teachers.name AS name,
  COUNT(assistance_requests.*) AS total_assistances
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
WHERE name = 'Waylon Boehm'
GROUP BY name;