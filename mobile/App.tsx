import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Login from './src/pages/login'
import Home from './src/pages/home'

export default function App() {
  return (
    <Login />
    //<Home />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
