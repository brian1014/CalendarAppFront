export const initialState = {
  status: 'checking',
  user: {},
  errorMessage: undefined
}

export const authenticated = {
  status: 'authenticated',
  user: {
    uid: 'abc',
    name: 'Fernando'
  },
  errorMessage: undefined
}

export const notAuthenticated = {
  status: 'not-authenticated',
  user: {},
  errorMessage: undefined
}