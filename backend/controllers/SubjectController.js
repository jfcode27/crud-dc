import { Subject } from '../models/index.js'

const getSubjects = async(req, res) => {
    const subjects = await Subject.findAll();

    return res.status(200).json(subjects);
}

const getSubjectById = async(req, res) => {
    const { id } = req.params;

    const subject = await Subject.findByPk(id);

    if (!subject) {
        return res.status(404).json({ message: 'Subject not found' });
    }

    return res.status(200).json(subject);
}

const getSubjectBySlug = async(req, res) => {
    const { slug } = req.params;

    const subject = await Subject.findOne({ where: { slug } });

    if (!subject) {
        return res.status(404).json({ message: 'Subject not found' });
    }

    return res.status(200).json(subject);
}


export {
    getSubjects,
    getSubjectById,
    getSubjectBySlug
}