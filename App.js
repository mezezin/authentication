import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput, TouchableOpacity, Image, SafeAreaView, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container} >
        <ImageBackground source={require('./assets/image-background.png')} style={styles.imageBackground}>
          {/* <Text>Login</Text> */}
          <Text style={styles.title2}>Welcome to</Text>
          <Text style={styles.title}>AuthTest</Text>
          <Text style={styles.title3}>Escolha uma forma de se autenticar.</Text>
          <Text style={styles.title4}>Criado por Josué Corrêa</Text>
          <TouchableOpacity
            style={styles.buttonSmartId}
            activeOpacity={0.5}>
            <Image
              source={require('./assets/smart-id.png')}
              style={styles.buttonImageIconStyle1}
            />
            {/* <View style={styles.buttonIconSeparatorStyle} /> */}
            <Text style={styles.buttonTextStyle1}>
              Smart Id
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSignIn}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonTextStyle2}>
              Sign in
            </Text>
            <Image
              source={require('./assets/sign-in.png')}
              style={styles.buttonImageIconStyle2}

            />
            {/* <View style={styles.buttonIconSeparatorStyle} /> */}
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

function HomeScreen2({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground source={require('./assets/image-background.png')} style={styles.imageBackground}>
          <Text style={styles.titleSignIn}>Sign In</Text>
          <TextInput style={styles.textInputEmail}
            placeholder="E-mail"
          />
          <TextInput style={styles.textInputSenha}
            placeholder="Senha"
          />
          <TouchableOpacity
            style={styles.buttonFim}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonTextStyle2}>
              Sign in
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

function HomeScreen3({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground source={require('./assets/image-background.png')} style={styles.imageBackground}>
          <Text style={styles.titleSignIn}>Login</Text>
          <TextInput
            style={styles.textInputEmail}
            placeholder="E-mail"
            type="text"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.textInputSenha}
            secureTextEntry={true}
            placeholder="Senha"
            type="text"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          {errorLogin === true
            ?
            <View style={styles.contentAlert}>
              <MaterialCommunityIcons
                name="alert-circle"
                size={24}
                color="#bdbdbd"
              />
              <Text style={styles.warningAlert}>
                E-mail ou senha inválidos
              </Text>
            </View>
            :
            <View />
          }
          {email === "" || password === ""
            ?
            <TouchableOpacity
              disabled={true}
              style={styles.buttonDisable}
            >
              <Text style={styles.buttonTextStyle2}>
                Entrar
              </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
              style={styles.buttonFim}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Fim')}
            >
              <Text style={styles.buttonTextStyle2}>
                Entrar
              </Text>
            </TouchableOpacity>
          }
          <Text
            style={styles.registratrion}
          >
            Ainda não é registrado?
          </Text>
          <Text
            style={styles.linkSubscribe}
            onPress={() => navigation.navigate("Sign In")}
          >
            cadastre-se agora...
          </Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

function HomeScreen4() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/image-background.png')} style={styles.imageBackground}>
        <Text style={styles.titleFim}>Você chegou ao fim!</Text>
        <Text style={styles.title3Fim}>Esse é apenas um projeto de teste, feito para treinar autenticação.</Text>
      </ImageBackground>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Sign In" component={HomeScreen2}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Login" component={HomeScreen3}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="Fim" component={HomeScreen4}
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "left",
    color: '#22215B',
    marginLeft: 30,
  },
  title2: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: "left",
    color: '#22215B',
    marginLeft: 30,
    marginTop: 299,
  },
  title3: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: "left",
    color: '#7B7F9E',
    marginLeft: 30,
    marginTop: 15,
  },
  title4: {
    fontSize: 14,
    fontWeight: '300',
    textAlign: "left",
    color: '#7B7F9E',
    marginLeft: 30,
    marginTop: 20,
  },
  buttonSmartId: {
    width: 170,
    height: 50,
    left: 15,
    top: 62,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'rgba(86, 125, 244, 0.1)',
    borderRadius: 10,
    margin: 5,
  },
  buttonImageIconStyle1: {
    marginRight: 10.69,
    height: 25.89,
    width: 23.31,
    resizeMode: 'stretch',
  },
  buttonTextStyle1: {
    color: '#567DF4',
    fontStyle: "normal",
    fontWeight: '700',
    fontSize: 16,
  },
  buttonSignIn: {
    width: 170,
    height: 50,
    left: 195,
    top: 2,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#567DF4',
    borderRadius: 10,
    margin: 5,
  },
  buttonImageIconStyle2: {
    marginLeft: 15,
    height: 8,
    width: 16,
    resizeMode: 'stretch',
  },
  buttonTextStyle2: {
    color: '#fff',
    fontStyle: "normal",
    fontWeight: '700',
    fontSize: 16,
  },
  titleSignIn: {
    top: 326,
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "left",
    color: '#22215B',
    marginLeft: 30,
  },
  textInputEmail: {
    width: 315,
    height: 50,
    left: 30,
    top: 350,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
  },
  textInputSenha: {
    width: 315,
    height: 50,
    left: 30,
    top: 350,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,

  },
  buttonDisable: {
    width: 315,
    height: 50,
    left: 30,
    top: 350,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'rgba(86, 125, 244, 0.1)',
    borderRadius: 10,
  },
  buttonFim: {
    width: 315,
    height: 50,
    left: 30,
    top: 350,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#567DF4',
    borderRadius: 10,
  },
  registratrion: {
    left: 65,
    top: 350,
    marginTop: 15,
    color: "#7B7F9E",
    fontStyle: "normal",
    fontWeight: '700',
    fontSize: 14,
  },
  linkSubscribe: {
    left: 200,
    top: 333,
    fontSize: 14,
    fontWeight: '300',
    color: '#567DF4',
  },
  titleFim: {
    top: 400,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    color: '#22215B',
    marginLeft: 55,
  },
  title3Fim: {
    top: 400,
    fontSize: 20,
    fontWeight: '700',
    textAlign: "left",
    color: '#7B7F9E',
    marginLeft: 55,
    marginRight: 55,
    marginTop: 5,
  },
});

