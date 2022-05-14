import { Post } from '../utils/RequestService'
const apiUrl = import.meta.env.VITE_API_URL
console.log(import.meta.env.MODE);

const AuthService = {
  login: (data: Map<string, any>) => Post(`${apiUrl}/auth/login`, data)
}

export default AuthService
