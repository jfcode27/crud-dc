import Teacher from "./Teacher.js";
import Subject from "./Subject.js";
import Grade from "./Grade.js";
import Student from "./Student.js"

// Associations
Subject.belongsTo(Teacher, { foreignKey: 'teacherId', as: 'teacher' });

Grade.belongsTo(Student, { foreignKey: 'studentId', as: 'student' });
Grade.belongsTo(Subject, { foreignKey: 'subjectId', as: 'subject' });

Student.hasMany(Grade, { foreignKey: 'studentId', as: 'grades' });

export {
    Teacher,
    Subject,
    Grade,
    Student
}