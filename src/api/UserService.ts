import { Get } from '../utils/RequestService'

const apiUrl = import.meta.env.VITE_API_URL

const UserService = {
  getUsers: (query?: Map<string, any>) => Get(`${apiUrl}/coin`, query)
}

export default UserService
