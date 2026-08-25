
import jwt from 'jsonwebtoken';

const generateToken = (res, adminId) => {

    const token = jwt.sign({ adminId }, process.env.JWT_SECRET, { 
        expiresIn: '30d'
    });

    const isProduction = process.env.NODE_ENV === 'production';

    res.cookie('jwt', token, {
        httpOnly : true,
        secure: isProduction,
        // Frontend (Netlify) and backend (Vercel) are on different domains in production,
        // so the cookie must be cross-site ('none' requires secure: true).
        sameSite: isProduction ? 'none' : 'lax',
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
}


export default generateToken;