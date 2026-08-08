import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'food-roulette-super-secret-jwt-key-2026';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export const authenticateJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
      if (err) {
        if (process.env.NODE_ENV !== 'production') {
          // Dev fallback for demo tokens
          req.user = {
            id: 'demo_user_123',
            email: 'demo@foodroulette.app',
            role: 'USER',
          };
          return next();
        }
        return res.status(403).json({ error: 'Token không hợp lệ hoặc đã hết hạn.' });
      }
      req.user = user;
      next();
    });
  } else if (process.env.NODE_ENV !== 'production') {
    // Dev guest fallback for testing without active login session
    req.user = {
      id: 'demo_user_123',
      email: 'demo@foodroulette.app',
      role: 'USER',
    };
    next();
  } else {
    res.status(401).json({ error: 'Yêu cầu xác thực tài khoản (chưa truyền Token).' });
  }
};
