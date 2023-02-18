import { Get, Post, Put } from '../utils/RequestService'

const apiUrl = import.meta.env.VITE_API_URL

const LanguageService = {
  createLanguage: () => Post(`${apiUrl}/language`),
  updateLanguage: () => Put(`${apiUrl}/language`),
  getAllLanguageByProject: (query?: Map<string, any>) => Get(`${apiUrl}/project/get-all-languages-by-project`, query),
}

export default LanguageService
