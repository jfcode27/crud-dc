import { User } from '../models/index.js';

const getStudents = async(req, res) => {
    const students = await User.findAll({ where: { isAdmin: false } });

    return res.status(200).json(students);
}

const getStudentById = async(req, res) => {
    const { id } = req.params;

    const student = await User.findOne({ where: { id, isAdmin: false }});

    if (!student) {
        return res.status(400).json({ message: 'Student not found.' });
    }

    return res.status(200).json(student);
}

export {
    getStudents,
    getStudentById
}