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

  const getStudents = useCallback(async (groupId) => {
    try {
      const { data } = await axios.get(`/students/${groupId}`)
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

  return {getStudents, getGroups, findStudents}
}