// import React, { useEffect } from 'react'
// import { getQuestionService } from './api/index'
// import { useRequest } from 'ahooks'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router/index'

function App() {
  // const { data, loading } = useRequest(getQuestionService, {
  //   // manual: true,
  // })
  // useEffect(() => {
  //   console.log(data, loading)
  // }, [])
  return <RouterProvider router={routerConfig} />
}

export default App
