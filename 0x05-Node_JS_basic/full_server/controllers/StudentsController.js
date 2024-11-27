const readDatabase = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const dbPath = process.argv[2];
            const data = await readDatabase(dbPath);
            res.send(`This is the list of our students`);
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }
    static async getAllStudentsByMajor(req, res) {
        // Implement logic as per requirements
    }
}

module.exports = StudentsController;
