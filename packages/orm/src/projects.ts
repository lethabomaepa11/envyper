import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getProjects = async (): Promise<any> => {}

export const getProjectById = async (id: number): Promise<any> => {}

export const createProject = async (data: any): Promise<any> => {}

export const updateProject = async (id: number, data: any): Promise<any> => {}

export const deleteProject = async (id: number): Promise<any> => {}