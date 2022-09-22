import React from 'react'
import axios from 'axios'

const WithEventsData = (WrappedComponent, group) => {
  return function WithEventsDataWrapped() {
    const [events, setEvents] = React.useState([])

    React.useEffect(() => {
      axios.get(`/events/${group}`)
      .then(({data: {events}}) => setEvents(events))
    }, [group])

    return <WrappedComponent events={events} />
  }
}

export const DisplayEvents = ({events}) => {
  return (
    <div>
      log events
      {console.log(events)}
    </div>
  )
}

export const DisplayEventsData = WithEventsData(DisplayEvents, 'A')