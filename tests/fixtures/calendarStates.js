export const events = [
  {
    id: '1',
    start: new Date('2022-10-21 13:00:00'),
    end: new Date('2022-10-21 15:00:00'),
    title: 'Cumpleados de Fernando',
    notes: 'Alguna nota',
  },
  {
    id: '2',
    start: new Date('2022-11-09 13:00:00'),
    end: new Date('2022-11-09 15:00:00'),
    title: 'Cumpleados de Melissa',
    notes: 'Alguna nota de Melissa',
  },
]

export const initalState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null
}

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null
}

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: {...events[0]}
}