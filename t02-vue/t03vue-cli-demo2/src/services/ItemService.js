import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'http://mqxu.natapp1.cc',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getTodoItems() {
    return apiClient.get('/items')
  },
  getItem(id) {
    console.log(id)
    return apiClient.get('/items/' + id)
  },
}
