import { Grade } from "../models/index.js";

const getGrades = async(req, res) => {
    const grades = await Grade.findAll();

    return res.status(200).json(grades);
}

const getGradeById = async(req, res) => {
    const { id } = req.params;

    const grade = await Grade.findOne({ where: { id } });
    if (!grade) {
        return res.status(400).json({ message: 'Grade not found.' });
    }

    return res.status(200).json(grade);
}

export {
    getGrades,
    getGradeById
}