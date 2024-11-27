const fs = require('fs');

function countStudents(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8').split('\n').filter(line => line.trim() !== '');
        const fields = {};
        const students = data.slice(1); // Exclude the header row

        console.log(`Number of students: ${students.length}`);

        students.forEach((row) => {
            const [firstName, , , field] = row.split(',');
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstName);
        });

        Object.keys(fields).forEach((field) => {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        });
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
