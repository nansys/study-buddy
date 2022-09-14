import axios from 'axios'
import React from 'react'

const EventsProvider = ({ children, group }) => {
    const [events, setEvents] = React.useState([])
  
    React.useEffect(() => {
      axios.get(`/events/${group}`)
      .then(({data: {events}}) => setEvents(events))
    }, [group])

    return children(events)
  
  }

  export default EventsProvider