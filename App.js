import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Input } from '@rneui/themed';
import { Header } from '@rneui/themed';
const CustomTitle = () => <Text style={{ color: 'white' }}>Logar</Text>;
const CustomTitle2 = () => <Text style={{ color: 'white' }}>Cadastre-se</Text>;
const CustomTitle3 = () => <Text style={{ color: 'white' }}>Cadastrar</Text>;
const CustomTitle4 = () => <Text style={{ color: 'white' }}>Enviar</Text>;

 function Login() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

   
      <View style={{ marginVertical: 20 }}>
        <Avatar
          size={100}
          rounded
          icon={{ name: "user", type: "font-awesome"}}
          containerStyle={{ backgroundColor: "#0000FF" }}
        />
      </View>

      <Input
      placeholder='Email'
    />
      
      <Input placeholder="Senha" secureTextEntry={true}/>

     
      <Button
              title={<CustomTitle />}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 20,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
            />
             <Button
              title={<CustomTitle2/>}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 20,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
            />
      <Text style={{marginTop:10,color: '#007BFF' }}>Esqueceu a senha</Text>
    </View>
  );
}
 function Cadastro() {
  return (
    <View style1={styles1.container1}>
      <StatusBar style="auto" />
      <Header>
      <Text style={{marginTop:10,color: '#FFF',textAlign: "center", fontSize: 17, fontWeight: "bold" }}>Cadastro</Text>
      </Header>
     
      <Input 
        placeholder="Nome" 
      />
      <Input 
        placeholder="Email" 
      />
      
      <Input placeholder="Senha" secureTextEntry={true}/>
      <Button
              title={<CustomTitle3 />}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 20,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
            />
    </View>
  );
}

const styles1 = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Esqueceu() {
  return (
    <View style2={styles2.container1}>
      <StatusBar style="auto" />
      <Header>
      <Text style={{marginTop:10,color: '#FFF',textAlign: "center", fontSize: 17, fontWeight: "bold" }}>Esqueceu a senha</Text>
      </Header>
     
      
      <Input 
        placeholder="Email" 
      />
      
      <Button
              title={<CustomTitle3 />}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 20,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
            />
    </View>
  );
}

const styles2 = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
