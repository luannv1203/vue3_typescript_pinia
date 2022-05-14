import { Post } from '../utils/RequestService'

const AuthService = {
  login: (data: Map<string, any>) => Post('http://api-pas-admin-dev.timebird.test/api/v1/auth/login', data)
}

export default AuthService
