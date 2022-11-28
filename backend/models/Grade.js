import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Grade = db.define('grades', {
    firstPartial: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    secondPartial: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    thirdPartial: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    finalGrade: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    }
});


export default Grade;