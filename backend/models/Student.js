import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Student = db.define('students', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    enrollment: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    semester: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    school: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


export default Student;