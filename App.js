
import React from 'react'
import { View, Text } from 'react-native'
import Root from './component/root'
import Home from "./src/Home"
const App = ({child}) => {
  return (
   <Root>
     <Home/>
   </Root>
  )
}

export default App
