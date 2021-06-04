import { configureStore } from '@reduxjs/toolkit'
import requestListReducer from './requestList.js'
import messagesReducer from './messages.js'

export default configureStore({
  reducer: {
    requests: requestListReducer,
    messages: messagesReducer
  },
})