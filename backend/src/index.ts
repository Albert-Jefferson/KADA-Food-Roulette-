import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import path from 'path';

import authRoutes from './modules/auth/auth.routes';
import restaurantsRoutes from './modules/restaurants/restaurants.routes';
import rouletteRoutes from './modules/roulette/roulette.routes';
import groupsRoutes from './modules/groups/groups.routes';
import locketsRoutes from './modules/lockets/lockets.routes';
import stewardRoutes from './modules/steward/steward.routes';
import menuRoutes from './modules/menu/menu.routes';
import preferencesRoutes from './modules/preferences/preferences.routes';
import circleRoutes from './modules/circle/circle.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security and utility middleware
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(morgan('dev'));

// Static uploads directory
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Food Roulette Backend API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// API Module Routes
app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantsRoutes);
app.use('/api/spin', rouletteRoutes);
app.use('/api/groups', groupsRoutes);
app.use('/api/lockets', locketsRoutes);
app.use('/api/steward', stewardRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/preferences', preferencesRoutes);
app.use('/api/circle', circleRoutes);

// Global 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint không tồn tại.' });
});

// Global Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({ error: 'Lỗi hệ thống máy chủ backend.' });
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Food Roulette Backend Server is running on port ${PORT}`);
  console.log(`🔗 Health Check: http://localhost:${PORT}/health`);
  console.log(`====================================================`);
});

export default app;
