import { useEffect, useState } from 'react'

import axios from 'axios'

export const useStudents = ({groupId = ''} = {}) => {

  const [students, setStudents] = useState([])
  const [groups, setGroups] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/groups')
        setGroups(data)
      } catch (e) {
        console.log(e)
      }
      })()
  }, [])

  useEffect(() => {
    if (!groupId) return
    (async () => {
      try {
        const { data } = await axios.get(`/students/${groupId}`)
        setStudents(data.students)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [groupId])

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

  return {students, groups, findStudents}
}