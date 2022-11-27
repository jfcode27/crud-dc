import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Grade = db.define('grades', {
    grade: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
});


export default Grade;