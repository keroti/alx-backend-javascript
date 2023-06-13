const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    try {
      const studentsCount = await countStudents(process.argv[2]);
      res.write('This is the list of our students\n');
      res.end(studentsCount);
    } catch (error) {
      res.end('Cannot load the database\n');
    }
  } else {
    res.end('Not found\n');
  }
});

app.listen(1245);

module.exports = app;
