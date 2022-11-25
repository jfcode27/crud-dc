import User from "./User.js";
import Subject from "./Subject.js";

// Associations
Subject.belongsTo(User, { foreignKey: 'teacherId' });

export {
    User,
    Subject
}