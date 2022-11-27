import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

const login = async(req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user) {
        return res.status(400).json({ message: 'User not found.' });
    }

    if (!user.verifyPassword(password)) {
        return res.status(400).json({ message: 'Incorrect password.' });
    }

    const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1d' });

    // return res.status(200).json({ user, token });

    return res.cookie('_token', token, {
        httpOnly: true
    }).status(200).json(user);
}

export {
    login
}