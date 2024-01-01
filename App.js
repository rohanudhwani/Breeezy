import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './screens/Header'
import Search from './screens/Search'

const App = () => {
  return (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
        <Search/>

    </>
  )
}

export default App

const styles = StyleSheet.create({})