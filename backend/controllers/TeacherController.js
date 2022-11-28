import { Teacher} from '../models/index.js';

const getTeachers = async(req, res) => {
    const teachers = await Teacher.findAll();

    return res.status(200).json(teachers);
}

export {
    getTeachers
};