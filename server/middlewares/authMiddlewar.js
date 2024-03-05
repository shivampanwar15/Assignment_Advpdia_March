
import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const token = req.header('token');
    
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        next();
    });
};

export default authenticateToken;
