import { Student } from '../models/index.js';

const getStudents = async(req, res) => {
    const students = await Student.findAll();

    return res.status(200).json(students);
}

const getStudentById = async(req, res) => {
    const { id } = req.params;

    const student = await Student.findOne({ where: { id }});

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

export {
    getStudents,
    getStudentById,
    createStudent
}