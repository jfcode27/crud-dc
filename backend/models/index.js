import User from "./User.js";
import Subject from "./Subject.js";
import Grade from "./Grade.js";

// Associations
Subject.belongsTo(User, { foreignKey: 'teacherId', as: 'teacher' });

Grade.belongsTo(User, { foreignKey: 'studentId', as: 'student' });
Grade.belongsTo(Subject, { foreignKey: 'subjectId', as: 'subject' });

export {
    User,
    Subject,
    Grade
}