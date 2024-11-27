const fs = require('fs').promises;

async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const rows = data.split('\n').filter(line => line.trim() !== '');
        const fields = {};
        rows.slice(1).forEach((row) => {
            const [firstName, , , field] = row.split(',');
            if (!fields[field]) fields[field] = [];
            fields[field].push(firstName);
        });
        return fields;
    } catch {
        throw new Error('Cannot load the database');
    }
}

module.exports = readDatabase;
