import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import db from '../config/database.js';

const User = db.define('users', {
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
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    hooks: {
        beforeCreate: async function(user) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
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
User.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

export default User;