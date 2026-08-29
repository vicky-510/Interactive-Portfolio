
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

const ACTION_TOKEN_PURPOSE = 'job-action';

const requireActionToken = asyncHandler(async (req, res, next) => {
    const token = req.headers['x-action-token'];

    if (!token) {
        res.status(403);
        throw new Error('Password verification required for this action');
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
        res.status(403);
        throw new Error('Action token expired or invalid, please verify your password again');
    }

    if (decoded.purpose !== ACTION_TOKEN_PURPOSE || decoded.adminId !== String(req.admin._id)) {
        res.status(403);
        throw new Error('Invalid action token');
    }

    next();
});

export { requireActionToken, ACTION_TOKEN_PURPOSE };
