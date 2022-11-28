import jwt from 'jsonwebtoken';
import { Teacher } from '../models/index.js';

const login = async(req, res) => {
    const { username, password } = req.body;

    const teacher = await Teacher.findOne({ where: { username } });
    if (!teacher) {
        return res.status(400).json({ message: 'User not found.' });
    }

    if (!teacher.verifyPassword(password)) {
        return res.status(400).json({ message: 'Incorrect password.' });
    }

    const token = jwt.sign({ id: teacher.id, name: teacher.name }, process.env.JWT_SECRET, { expiresIn: '1d' });

    return res.status(200).json({ teacher, token });
}

export {
    login
}