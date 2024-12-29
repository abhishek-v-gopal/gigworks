
import { ne } from 'drizzle-orm';
import { createMiddleware } from 'hono/factory'
import jwt from 'jsonwebtoken';


// Generate Bearer Token
export const generateToken = (data, c) => {
    return jwt.sign(data, c.env.JWT_TOKEN_SECRET, { expiresIn: c.env.JWT_TOKEN_EXPIRY });
}


// Verify token
export const verifyToken = createMiddleware<{
    Variables: {
        token: string;
        decoded: any;
    }
  }>(async (c, next) => {
    console.log('Verifying token');
    await next();
});


// ------------------------------------------------------------------------------------------------------


// Verify Admin
export const verifyAdmin = (c, next) => {
    if (c.req.user.role !== 'admin') {
        return c.res.status(403).json({ message: 'Forbidden' });
    }
    next();
}


// Verify Partner
export const verifyPartner = (c, next) => {
    if (c.req.user.role !== 'partner') {
        return c.res.status(403).json({ message: 'Forbidden' });
    }
    next();
}


// Verify User
export const verifyUser = (c, next) => {
    if (c.req.user.role !== 'user') {
        return c.res.status(403).json({ message: 'Forbidden' });
    }
    next();
}
