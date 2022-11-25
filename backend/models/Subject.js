import { DataTypes } from 'sequelize';
import slugify from 'limax';
import db from '../config/database.js';

const Subject = db.define('subjects', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING
    }
}, {
    hooks: {
        beforeCreate: async function(subject) {
            subject.slug = slugify(subject.name);
        }
    }
});


export default Subject;