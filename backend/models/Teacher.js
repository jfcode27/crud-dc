import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import db from '../config/database.js';

const Teacher = db.define('teachers', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate: async function(teacher) {
            const salt = await bcrypt.genSalt(10);
            teacher.password = await bcrypt.hash(teacher.password, salt);
        }
    },
    scopes: {
        removePassword: {
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
            }
        }
    }
});

// Custom methods
Teacher.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

export default Teacher;