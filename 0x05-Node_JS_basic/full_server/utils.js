import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        const students = {};
        const lines = data.split('\n').filter(Boolean);

        lines.forEach((line) => {
          const [firstName, field] = line.split(',');
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName);
        });

        resolve(students);
      }
    });
  });
};
