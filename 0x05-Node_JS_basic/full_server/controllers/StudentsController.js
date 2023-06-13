import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.databaseFilePath);
      let response = 'This is the list of our students\n';

      Object.keys(students)
        .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
        .forEach((field) => {
          const count = students[field].length;
          const list = students[field].join(', ');

          response += `Number of students in ${field}: ${count}. List: ${list}\n`;
        });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(req.databaseFilePath);
      const list = students[major] || [];

      res.status(200).send(`List: ${list.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
