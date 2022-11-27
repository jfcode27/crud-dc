import { exit } from 'node:process';
import users from './users.js';
import subjects from './subjects.js';
import grades from './grades.js';
import { User, Subject, Grade } from '../models/index.js';
import db from '../config/database.js';

const importData = async() => {
    try {
        // Authenticate
        await db.authenticate();

        // Generate columns
        await db.sync();

        // Insert data
        await Promise.all([
            User.bulkCreate(users),
            Subject.bulkCreate(subjects),
            Grade.bulkCreate(grades)
        ]);

        console.log('Data imported successfully.');
        exit(0);
    } catch (error) {
        console.log(error);
        exit(1);
    }
}

const deleteData = async() => {
    try {
        await db.sync({ force: true });

        console.log('Data deleted successfully.');
        exit(0);
    } catch (error) {
        console.log(error);
        exit(1);
    }
}

if (process.argv[2] === '-i') {
    importData();
}

if (process.argv[2] === '-d') {
    deleteData();
}