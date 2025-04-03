import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';

export default  function Login() {
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
      <Text style={{color: '#000000', fontWeight: 'bold',  marginLeft: -300}}>
        Email
      </Text>
      <Input
      placeholder=''
    />
      <Text style={{color: '#000000', fontWeight: 'bold', marginLeft: -300}}>
        Senha
      </Text>
      <Input placeholder="" secureTextEntry={true}/>

     
    
             <Button
              title="Login"
              titleStyle={{ fontWeight: 'bold', fontSize: 18}}
              containerStyle={{ marginVertical: 10 }}
              buttonStyle={{ backgroundColor: '#00c0a3', borderRadius:10,}}
            />


            <Button
              title="Cadastre-se"
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              buttonStyle={{ backgroundColor: '#00c0a3', borderRadius:10,}}
            />
      <Text style={{marginTop:10,color: '#000000' }}>Esqueceu a senha</Text>
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

function Esqueceu() {
  return (
    <View style2={styles2.container1}>
      <StatusBar style="auto" />
      <Header>
      <Text style={{marginTop:10,color: '#FFF',textAlign: "center", fontSize: 17, fontWeight: "bold" }}>Esqueceu a senha</Text>
      </Header>
     
      
      <Input 
        placeholder="Email" 
      />
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
