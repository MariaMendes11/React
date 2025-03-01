import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import api from '../axios/axios'

export default function Login(){
    const [user,setUser] = useState({
        email:"",
        password:""
    })

    async function handleLogin() {
        console.log(user)
        await api.postLogin(user).then(
            (response)=>{
                console.log(response.data.message)
                Alert.alert('OK',response.data.message)
            },(error)=>{
                    Alert.alert('Erro',error.response.data.error)
                    console.log(error)
            }
        )
    }

    return(
        <View style={styles.container}>
        <Text style={styles.title}>Faça Login</Text>
        <TextInput
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(value)=> {setUser({ ...user, email: value});
        }}
        />
        <TextInput
        style={styles.input}
        placeholder="Senha"
        value={user.password}
        onChangeText={(value)=> {setUser({ ...user, password: value});
        }}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text>Entrar</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  title:{
    fontSize:28,
    fontWeight:'bold'
  },
  input:{
    width:'100%',
    height:40,
    borderBottomWidth:1,
    marginBotton:'20',
    paddingHorizontal:'10'
  },
  button:{
    backgroundColor:'purple',
    padding:10,
    borderRadius:5
  }
});