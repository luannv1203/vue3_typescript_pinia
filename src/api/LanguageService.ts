import { Get, Post, Put } from '../utils/RequestService'

const apiUrl = import.meta.env.VITE_API_URL

const LanguageService = {
  createLanguage: (data: Map<string, any>) => Post(`${apiUrl}/language`, data),
  updateLanguage: (data: Map<string, any>) => Put(`${apiUrl}/language`, data),
  getAllLanguageByProject: (query?: Map<string, any>) => Get(`${apiUrl}/project/get-all-languages-by-project`, query),
}

export default LanguageService
