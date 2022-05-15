import { Get } from '../utils/RequestService'

const apiUrl = import.meta.env.VITE_API_URL

const UserService = {
  getUsers: (query?: Map<string, any>) => Get(`${apiUrl}/user`, query)
}

export default UserService
