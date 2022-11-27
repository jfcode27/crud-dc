import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

const protectRoute = async(req, res, next) => {
    // Check for token
    const { _token } = req.cookies;
    if (!_token) {
        return res.clearCookie('_token').status(403).json({ message: 'You are not allowed to perform this operation.' });
    }

    // Validate token
    try {
        const decoded = jwt.verify(_token, process.env.JWT_SECRET);
        const user = await User.scope('removePassword').findByPk(decoded.id);

        if (user) {
            req.user = user;
        } else {
            return res.clearCookie('_token').status(403).json({ message: 'Invalid token.' });
        }

        return next();
    } catch (error) {
        return res.clearCookie('_token').status(403).json({ message: 'An error has occurred.' });
    }
};

export default protectRoute;