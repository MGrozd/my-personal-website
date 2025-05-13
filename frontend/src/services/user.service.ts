import axios from 'axios'
import { User } from '../models/user'

const API_URL = import.meta.env.VITE_BACKEND_API_URL

class UserService {
  async getUserInfo(userId: string): Promise<User> {
    const response = await axios.get(API_URL + `users/${userId}`)
    return response.data
  }
}

export default new UserService()
