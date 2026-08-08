import { Response } from 'express'
import { ApiResponse, PaginatedResponse } from '../types/index.js'

export const successResponse = <T>(
  res: Response,
  data: T,
  message?: string,
  statusCode = 200
): Response => {
  const response: ApiResponse<T> = {
    success: true,
    data,
    ...(message && { message }),
  }
  return res.status(statusCode).json(response)
}

export const createdResponse = <T>(
  res: Response,
  data: T,
  message = 'Created successfully'
): Response => {
  return successResponse(res, data, message, 201)
}

export const paginatedResponse = <T>(
  res: Response,
  data: T[],
  pagination: {
    page: number
    limit: number
    total: number
  }
): Response => {
  const response: PaginatedResponse<T> = {
    success: true,
    data,
    pagination: {
      ...pagination,
      totalPages: Math.ceil(pagination.total / pagination.limit),
    },
  }
  return res.status(200).json(response)
}

export const noContentResponse = (res: Response): Response => {
  return res.status(204).send()
}

export const errorResponse = (
  res: Response,
  message: string,
  statusCode = 400
): Response => {
  return res.status(statusCode).json({
    success: false,
    error: message,
  })
}
