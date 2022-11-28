import { Subject, Grade, Student, Teacher } from '../models/index.js'

const getSubjects = async(req, res) => {
    const subjects = await Subject.findAll({
        include: {
            model: Teacher,
            as: 'teacher',
            attributes: ['id', 'name']
        }
    });

    return res.status(200).json(subjects);
}

const getSubjectById = async(req, res) => {
    const { id } = req.params;

    const subject = await Subject.findByPk(id, {
        include: {
            model: Teacher,
            as: 'teacher',
            attributes: ['id', 'name']
        }
    });

    if (!subject) {
        return res.status(404).json({ message: 'Subject not found' });
    }

    return res.status(200).json(subject);
}

const getSubjectBySlug = async(req, res) => {
    const { slug } = req.params;

    const subject = await Subject.findOne({ 
        where: { 
            slug 
        },
        include: {
            model: Teacher,
            as: 'teacher',
            attributes: ['id', 'name']
        }
    });

    if (!subject) {
        return res.status(404).json({ message: 'Subject not found' });
    }

    return res.status(200).json(subject);
}

const getSubjectGrades = async(req, res) => {
    const { id } = req.params;

    const grades = await Grade.findAll({ 
        where: { 
            subjectId: id
        }, 
        include: [
            {
                model: Student,
                as: 'student',
                attributes: ['id', 'name']
            },
            {
                model: Subject,
                as: 'subject',
                attributes: ['id', 'name']
            }
        ],
        attributes: ['id', 'grade']
    });

    if (!grades || grades.length === 0) {
        return res.status(404).json({ message: 'There are no grades in this subject' });
    }

    return res.status(200).json(grades);
}


export {
    getSubjects,
    getSubjectById,
    getSubjectBySlug,
    getSubjectGrades
}