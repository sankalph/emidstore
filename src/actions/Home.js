import { SENT_CLIENT_DATA } from '../constants/actionTypes'
import { GET_CLIENT_DATA } from '../constants/actionTypes'
import { GET_APP_DATA } from '../constants/actionTypes.js'
import { SENT_APP_DATA } from '../constants/actionTypes.js'
import { SENT_CHOOSE_DATA } from '../constants/actionTypes.js'
import { GET_CHOOSE_DATA } from '../constants/actionTypes.js'

export const sentClientData = () => ({
  type: SENT_CLIENT_DATA
})

export const getClientData = payload => ({
  type: GET_CLIENT_DATA,
payload})

export const sentAppData = () => ({
  type: SENT_APP_DATA
})

export const getAppData = payload => ({
  type: GET_APP_DATA,
payload})

export const setfeature = () => ({
  type: SENT_CHOOSE_DATA
})

export const getfeature = payload => ({
  type: GET_CHOOSE_DATA,
payload})
