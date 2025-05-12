// author: Matej grozdanić
// date: 2023-10-01
// description: This code is a service for fetching user data from a backend API. It uses axios to make HTTP requests and returns the user profile data.

import axios from 'axios'
import { User } from '../models/user'

const API_URL = import.meta.env.VITE_BACKEND_API_URL

class UserDataService {
  async getUserData(): Promise<User> {
    const response = await axios.get(API_URL + 'user/data')
    return response.data
  }