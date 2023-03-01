import { configureStore } from '@reduxjs/toolkit'
import { act, renderHook } from '@testing-library/react'
import { Provider } from 'react-redux'
import { useUiStore } from '../../src/hooks/useUiStore'
import { uiSlice } from '../../src/store'

const getMockStore = (initalState) => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer
    },
    preloadedState: {
      ui: {...initalState}
    }
  })
}

describe('Pruebas en useUiStore', () => {
  
  test('should de regresar los valores por defecto', () => {
    
    const mockStore = getMockStore({isDateModalOpen: false})

    const {result} = renderHook(() => useUiStore(), {
      wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
    })

    expect(result.current).toEqual({
      isDateModalOpen: false,
      openDateModal: expect.any(Function),
      closeDateModal: expect.any(Function),
      toggleDateModal: expect.any(Function),
    })
  })

  test('openDateModal debe de colocar true en el isDateModalOPne', () => {
    const mockStore = getMockStore({isDateModalOpen: false})

    const {result} = renderHook(() => useUiStore(), {
      wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
    })

    const {openDateModal} = result.current

    act(() => {
      openDateModal()
    })

    expect(result.current).toBeTruthy()
  })

  test('closeDateModal debe de poner false en isDateModalOpen', () => {
    const mockStore = getMockStore({isDateModalOpen: true})

    const {result} = renderHook(() => useUiStore(), {
      wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
    })

    act(() => {
      result.current.closeDateModal()
    })

    expect(result.current.isDateModalOpen).toBeFalsy()
  })
  
  
  test('toggleDateModal debe de cambiar el estado respectivamente', () => {
    const mockStore = getMockStore({isDateModalOpen: true})

    const {result} = renderHook(() => useUiStore(), {
      wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>
    })

    act(() => {
      result.current.toggleDateModal()
    })
    expect(result.current.isDateModalOpen).toBeFalsy()
    
    act(() => {
      result.current.toggleDateModal()
    })
    expect(result.current.isDateModalOpen).toBeTruthy()

  })
})