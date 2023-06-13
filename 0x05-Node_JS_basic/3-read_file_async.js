const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).filter(line => line !== '');

        console.log(`Number of students: ${students.length}`);

        const fields = {};
        for (const student of students) {
          const [, , , field] = student.split(',');
          if (fields[field]) {
            fields[field].push(student.split(',')[0]);
          } else {
            fields[field] = [student.split(',')[0]];
          }
        }

        for (const field in fields) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
