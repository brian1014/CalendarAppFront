import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from '../../../src/store/calendar/calendarSlice'
import { calendarWithEventsState, events, initalState, calendarWithActiveEventState } from '../../fixtures/calendarStates'

describe('pruebas en calendarSlice', () => {
  
  test('should de regresar el estado por defecto', () => {
    const state = calendarSlice.getInitialState()
    expect(state).toEqual(initalState)
  })

  test('onSetActiveEvent debe de activar el evento', () => {
    const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]))
    
    expect(state.activeEvent).toEqual(events[0])
  })

  test('onAddNewEvent debe de agregar el evento', () => {
    const newEvent = {
      id: '3',
      start: new Date('2020-10-21 13:00:00'),
      end: new Date('2020-10-21 15:00:00'),
      title: 'Cumpleados de Fernando!!',
      notes: 'Alguna nota!!',
    }

    const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent))

    expect(state.events).toEqual([...events, newEvent])
  })
  
  test('onUpdateEvent debe de actualizar el evento', () => {
    const updatedEvent = {
      id: '1',
      start: new Date('2020-10-21 13:00:00'),
      end: new Date('2020-10-21 15:00:00'),
      title: 'Cumpleados de Fernando actualizado',
      notes: 'Alguna nota actualizada',
    }

    const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent))

    expect(state.events).toContain(updatedEvent)
  })

  test('onDeleteEvent debe de borrar el evento activo', () => {
    const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]))
  
    const newState = calendarSlice.reducer(state, onDeleteEvent())

    expect(newState.activeEvent).toBeFalsy()
    expect(newState).not.toContain(state.activeEvent)
  })

  test('onLoadEvents debe de cargar los eventos', () => {
    const state = calendarSlice.reducer(initalState, onLoadEvents(events))

    expect(state.isLoadingEvents).toBeFalsy()
    expect(state.events).toEqual(events)
    
  })

  test('onLogoutCalendar debe de limpiar el estado', () => {
  
    const state = calendarSlice.reducer(calendarWithActiveEventState, onLogoutCalendar())

    expect(state).toEqual(initalState)
    expect(state.isLoadingEvents).toBeTruthy()
    expect(state.events.length).toBe(0)
    expect(state.activeEvent).toBeFalsy()
    
  })

  
})