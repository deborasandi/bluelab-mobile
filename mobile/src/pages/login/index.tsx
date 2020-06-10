import React, {useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Image,
        KeyboardAvoidingView, TouchableWithoutFeedback,  Platform, Keyboard, Alert } from 'react-native'
import {RectButton} from 'react-native-gesture-handler'
import {Feather as Icon} from '@expo/vector-icons'
import api from '../../services/api'
import {useNavigation, useRoute } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    api.get(`user/${username}`).then(response => {
      const u = response.data

      if(!u) {
        console.log('ferrou')
        return
      }

      if(username === u.username && password === u.password){
        navigation.navigate('Home', {username: u.username})
      }
    })
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground 
        source={require('../../assets/logo-background.jpg')}
        style={styles.container}
        imageStyle={{opacity: 0.15, height: '60%'}}
      >

        <View style={styles.main}>
          <Image 
          source={require('../../assets/logo-name.png')}
          style={styles.titleName} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.title}>Usuário</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
          <Text style={styles.title}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <RectButton
            style={styles.button}
            onPress={handleLogin}
          >
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24}/>
              </Text>
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  titleName: {
    flex: 1,
    aspectRatio: 0.5,
    resizeMode: 'contain',
  },

  title: {
    color: '#001a33',
    fontSize: 20,
    maxWidth: 260,
  },

  description: {
    color: '#001a33',
    fontSize: 16,
    marginTop: 16,
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 32,
  },

  select: {},

  input: {
    height: 60,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#004080',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 18,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  }
});

export default Login