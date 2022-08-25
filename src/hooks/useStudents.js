import { useCallback } from 'react'

import axios from 'axios'

export const useStudents = () => {

  const getGroups = useCallback(async () => {
    try {
      const { data } = await axios.get('/groups')
      return data
    } catch (e) {
      console.log(e)
    }
    }, [])

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const { data } = await axios.get(`/groups/${groupId}`)
      return data.students
    } catch (e) {
      console.log(e)
    }
  }, [])

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post('/students/search', {
        searchPhrase
      })
      return data
    } catch (e) {
      console.log(e)
    }
  }

  const getStudentsById = useCallback(async (studenId) => {
    try {
      const result = await axios.get(`/students/${studenId}`)
      return result.data.students
    } catch (e) {
      console.log(e)
    }
  }, [])

  return {getStudentsByGroup, getGroups, findStudents, getStudentsById}
}