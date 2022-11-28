import { Grade, Student, Subject } from '../models/index.js';

const getStudents = async(req, res) => {
    const students = await Student.findAll();

    return res.status(200).json(students);
}

const getStudentById = async(req, res) => {
    const { id } = req.params;

    const student = await Student.findOne({ 
        where: { 
            id 
        },
        include: {
            model: Grade,
            as: 'grades',
            attributes: ['id', 'subjectId', 'firstPartial', 'secondPartial', 'thirdPartial', 'finalGrade'],
            include: {
                model: Subject,
                as: 'subject',
                attributes: ['id', 'name']
            }
        }
    });

    if (!student) {
        return res.status(400).json({ message: 'Student not found.' });
    }

    return res.status(200).json(student);
}

const createStudent = async(req, res) => {
    const { name, enrollment, semester, school } = req.body;

    const studentExists = await Student.findOne({ where: { enrollment } });
    if (studentExists) {
        return res.status(400).json({ message: 'User already exists.' });
    }

    const student = await Student.create({ name, enrollment, semester, school });

    return res.status(201).json(student);
}

const updateStudent = async(req, res) => {
    const { id } = req.params;
    const { name, enrollment, semester, school } = req.body;

    const student = await Student.findOne({ where: { id } });
    if (!student) {
        return res.status(400).json({ message: 'Student not found.' });
    }

    await Student.update({ name, enrollment, semester, school }, { where: { id } });

    return res.status(200).json({ message: 'Student updated successfully.' });
}

const deleteStudent = async(req, res) => {
    const { id } = req.params;

    const student = await Student.findOne({ where: { id } });
    if (!student) {
        return res.status(400).json({ message: 'Student not found.' });
    }

    await Student.destroy({ where: { id } });

    return res.status(200).json({ message: 'Student deleted successfully.' });
}

const assignSubject = async(req, res) => {
    const { id } = req.params;
    const { subjectId } = req.body;

    const student = await Student.findOne({ where: { id } });
    if (!student) {
        return res.status(400).json({ message: 'Student not found.' });
    }

    const grade = await Grade.create({ studentId: parseInt(id), subjectId });

    return res.status(201).json(grade);
}

export {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    assignSubject
}