import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/route.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}
