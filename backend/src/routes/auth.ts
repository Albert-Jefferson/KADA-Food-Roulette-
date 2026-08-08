import { Router } from 'express'
import { body } from 'express-validator'
import prisma from '../lib/prisma.js'
import { validate } from '../middleware/validate.js'
import { authenticate } from '../middleware/auth.js'
import { successResponse, createdResponse, errorResponse } from '../utils/response.js'
import { generateAccessToken, generateRefreshToken, verifyToken } from '../utils/jwt.js'
import { hashPassword, comparePassword } from '../utils/hash.js'
import { v4 as uuidv4 } from 'uuid'
import { Request, Response } from 'express'

const router = Router()

// Validation rules
const registerValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Email không hợp lệ'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Mật khẩu phải có ít nhất 8 ký tự')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số'),
  body('displayNamePrivate')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Tên hiển thị phải từ 2-50 ký tự'),
  body('displayNamePublic')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Tên công khai phải từ 2-50 ký tự'),
]

const loginValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Email không hợp lệ'),
  body('password').notEmpty().withMessage('Mật khẩu không được để trống'),
]

// Helper: Generate public ID
const generatePublicId = (): string => {
  return 'FR' + uuidv4().replace(/-/g, '').substring(0, 8).toUpperCase()
}

// POST /auth/register
router.post('/register', validate(registerValidation), async (req, res, next) => {
  try {
    const { email, password, displayNamePrivate, displayNamePublic } = req.body

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return errorResponse(res, 'Email đã được sử dụng', 409)
    }

    // Hash password
    const passwordHash = await hashPassword(password)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        displayNamePrivate,
        displayNamePublic,
        publicId: generatePublicId(),
      },
      select: {
        id: true,
        email: true,
        displayNamePrivate: true,
        displayNamePublic: true,
        publicId: true,
        createdAt: true,
      },
    })

    // Generate tokens
    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: 'USER',
    }
    const accessToken = generateAccessToken(tokenPayload)
    const refreshToken = generateRefreshToken(tokenPayload)

    return createdResponse(res, {
      user,
      accessToken,
      refreshToken,
    }, 'Đăng ký thành công')
  } catch (error) {
    next(error)
  }
})

// POST /auth/login
router.post('/login', validate(loginValidation), async (req, res, next) => {
  try {
    const { email, password } = req.body

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return errorResponse(res, 'Email hoặc mật khẩu không đúng', 401)
    }

    // Check password
    const isValidPassword = await comparePassword(password, user.passwordHash)
    if (!isValidPassword) {
      return errorResponse(res, 'Email hoặc mật khẩu không đúng', 401)
    }

    // Generate tokens
    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    }
    const accessToken = generateAccessToken(tokenPayload)
    const refreshToken = generateRefreshToken(tokenPayload)

    return successResponse(res, {
      user: {
        id: user.id,
        email: user.email,
        displayNamePrivate: user.displayNamePrivate,
        displayNamePublic: user.displayNamePublic,
        publicId: user.publicId,
        avatarUrl: user.avatarUrl,
        role: user.role,
        isOnboarded: user.isOnboarded,
        subscriptionTier: user.subscriptionTier,
      },
      accessToken,
      refreshToken,
    }, 'Đăng nhập thành công')
  } catch (error) {
    next(error)
  }
})

// POST /auth/refresh
router.post('/refresh', async (req, res, next) => {
  try {
    const { refreshToken } = req.body

    if (!refreshToken) {
      return errorResponse(res, 'Refresh token không được cung cấp', 400)
    }

    const decoded = verifyToken(refreshToken)

    if ((decoded as any).type !== 'refresh') {
      return errorResponse(res, 'Invalid refresh token', 401)
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    })

    if (!user) {
      return errorResponse(res, 'Người dùng không tồn tại', 401)
    }

    // Generate new tokens
    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    }
    const newAccessToken = generateAccessToken(tokenPayload)
    const newRefreshToken = generateRefreshToken(tokenPayload)

    return successResponse(res, {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    })
  } catch (error) {
    next(error)
  }
})

// GET /auth/me
router.get('/me', authenticate, async (req, res, next) => {
  try {
    const userId = req.user!.userId

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        displayNamePrivate: true,
        displayNamePublic: true,
        publicId: true,
        avatarUrl: true,
        role: true,
        isOnboarded: true,
        subscriptionTier: true,
        createdAt: true,
      },
    })

    if (!user) {
      return errorResponse(res, 'Người dùng không tồn tại', 404)
    }

    return successResponse(res, user)
  } catch (error) {
    next(error)
  }
})

// POST /auth/logout
router.post('/logout', authenticate, async (req, res, next) => {
  try {
    // In a production app, you might want to blacklist the token
    // For now, we just return success
    return successResponse(res, null, 'Đăng xuất thành công')
  } catch (error) {
    next(error)
  }
})

// POST /auth/forgot-password
router.post('/forgot-password',
  body('email').isEmail().normalizeEmail(),
  validate([]),
  async (req, res, next) => {
    try {
      const { email } = req.body

      const user = await prisma.user.findUnique({
        where: { email },
      })

      // Always return success to prevent email enumeration
      if (!user) {
        return successResponse(res, null, 'Nếu email tồn tại, hướng dẫn đặt lại mật khẩu đã được gửi')
      }

      // TODO: Generate reset token and send email
      // For now, return success message
      return successResponse(res, null, 'Nếu email tồn tại, hướng dẫn đặt lại mật khẩu đã được gửi')
    } catch (error) {
      next(error)
    }
  }
)

// POST /auth/google (OAuth callback)
router.post('/google', async (req, res, next) => {
  try {
    const { googleId, email, displayName, avatarUrl } = req.body

    if (!googleId || !email) {
      return errorResponse(res, 'Google ID và email là bắt buộc', 400)
    }

    // Find or create user by email
    let user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      // Create new user
      user = await prisma.user.create({
        data: {
          email,
          passwordHash: '', // No password for OAuth users
          displayNamePrivate: displayName || email.split('@')[0],
          displayNamePublic: displayName || email.split('@')[0],
          publicId: generatePublicId(),
          avatarUrl: avatarUrl || null,
        },
      })
    }

    // Generate tokens
    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    }
    const accessToken = generateAccessToken(tokenPayload)
    const refreshToken = generateRefreshToken(tokenPayload)

    return successResponse(res, {
      user: {
        id: user.id,
        email: user.email,
        displayNamePrivate: user.displayNamePrivate,
        displayNamePublic: user.displayNamePublic,
        publicId: user.publicId,
        avatarUrl: user.avatarUrl,
        role: user.role,
        isOnboarded: user.isOnboarded,
        subscriptionTier: user.subscriptionTier,
      },
      accessToken,
      refreshToken,
    }, 'Đăng nhập Google thành công')
  } catch (error) {
    next(error)
  }
})

export default router
