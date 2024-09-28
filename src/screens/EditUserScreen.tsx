import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert, StyleSheet, ActivityIndicator, Text } from "react-native";
import axios from "axios";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  EditUser: { userId: number };
};

type EditUserScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "EditUser"
>;

type EditUserScreenRouteProp = RouteProp<RootStackParamList, "EditUser">;

type Props = {
  route: EditUserScreenRouteProp;
  navigation: EditUserScreenNavigationProp;
};

const EditUserScreen: React.FC<Props> = ({ route, navigation }) => {
  const { userId } = route.params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://192.168.3.8:3000/users/${userId}`); 
        const { name, email, login, password, city } = response.data;
        setName(name);
        setEmail(email);
        setLogin(login);
        setPassword(password);
        setCity(city);
      } catch (error) {
        Alert.alert("Erro", "Erro ao buscar os dados do usuário.");
      } finally {
        setLoading(false); 
      }
    };

    fetchUser();
  }, [userId]);

  const handleSave = async () => {
    try {
      await axios.put(`http://192.168.3.8:3000/users/${userId}`, {
        name,
        email,
        login,
        password,
        city,
      });  
      Alert.alert("Sucesso", "Usuário atualizado com sucesso!");
      navigation.goBack();  
    } catch (error) {
      Alert.alert("Erro", "Erro ao atualizar o usuário.");
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ea" />
        <Text>Carregando dados do usuário...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}  
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditUserScreen;
