import { useCallback } from 'react'

import axios from 'axios'

const studentsAPI = axios.create({})

studentsAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

export const useStudents = () => {

  const getGroups = useCallback(async () => {
    try {
      const { data } = await studentsAPI.get('/groups')
      return data
    } catch (e) {
      console.log(e)
    }
    }, [])

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const { data } = await studentsAPI.get(`/groups/${groupId}`)
      return data.students
    } catch (e) {
      console.log(e)
    }
  }, [])

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post('/students/search', {
        searchPhrase
      })
      return data
    } catch (e) {
      console.log(e)
    }
  }

  const getStudentsById = useCallback(async (studenId) => {
    try {
      const result = await studentsAPI.get(`/students/${studenId}`)
      return result.data.students
    } catch (e) {
      console.log(e)
    }
  }, [])

  return {getStudentsByGroup, getGroups, findStudents, getStudentsById}
}