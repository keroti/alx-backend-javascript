const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line !== '');
    const fields = {};
    let totalStudents = 0;

    lines.forEach((line) => {
      const student = line.split(',');
      const field = student[3];

      if (field in fields) {
        fields[field].push(student[0]);
      } else {
        fields[field] = [student[0]];
      }

      totalStudents += 1;
    });

    console.log(`Number of students: ${totalStudents}`);
    for (const field in fields) {
      const count = fields[field].length;
      const studentList = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${studentList}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
