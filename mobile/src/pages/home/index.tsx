
import React, {useState, useEffect} from 'react'
import api from '../../services/api'
import {useNavigation, useRoute} from '@react-navigation/native'
import { StyleSheet, Text, View, ScrollView, SafeAreaView    } from 'react-native'
import {RectButton} from 'react-native-gesture-handler'
import {Feather as Icon, FontAwesome} from '@expo/vector-icons'
import Constants from 'expo-constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Params {
  username: string
}

interface User {
  id: number,
  client_id: number,
  username: string,
  password: string,
  isadmin: boolean
}

const Home = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const routeParams = route.params as Params

  const [user, setUser] = useState<User>()

  useEffect(() => {
    api.get(`user/${routeParams.username}`).then(response => {
      setUser(response.data)
    })
  }, [])

  return (
    <View style={{flex:1}}>
      <Text>Olá, {user?.username}</Text>
    </View>
  )
}

export default Home