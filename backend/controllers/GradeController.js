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

const updateGrade = async(req, res) => {
    const { id } = req.params;
    const { firstPartial, secondPartial, thirdPartial } = req.body;
    const finalGrade = (firstPartial + secondPartial + thirdPartial) / 3;

    const grade = await Grade.findOne({ where: { id } });
    if (!grade) {
        return res.status(400).json({ message: 'Grade not found.' });
    }

    const updatedGrade = await Grade.update({ firstPartial, secondPartial, thirdPartial, finalGrade }, { where: { id } });

    return res.status(200).json(updatedGrade);
}

export {
    getGrades,
    getGradeById,
    updateGrade
}