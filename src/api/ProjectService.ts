import { Get, Post, Put } from '../utils/RequestService'

const apiUrl = import.meta.env.VITE_API_URL

const ProjectService = {
  getListAllProject: () => Get(`${apiUrl}/project`),
  createProject: (data: Map<string, any>) => Post(`${apiUrl}/project`, data),
  updateProject: (data: Map<string, any>) => Put(`${apiUrl}/project`, data),
  getProjectById: (id) => Get(`${apiUrl}/project/${id}`),
}

export default ProjectService
