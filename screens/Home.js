import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
    const [info, setInfo] = useState({
        name:"loading !!",
        temp:"loading",
        humidity:"loading",
        desc:"loading",
        icon:"loading"
    
    })

    const getWeather= () => {
        fetch(``)
    }

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})