const fs = require('fs');

function countStudents(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const rows = data.split('\n').filter(line => line.trim() !== '');
            const fields = {};
            const students = rows.slice(1); // Exclude the header row

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

            resolve();
        });
    });
}

module.exports = countStudents;
