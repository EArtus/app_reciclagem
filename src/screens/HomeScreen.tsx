import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Alert, Button } from "react-native";
import axios from "axios";
import { useNavigation, useIsFocused } from "@react-navigation/native"; 
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";

type RootStackParamList = {
  Home: undefined;
  UserDetails: { userId: number };
  EditUser: { userId: number };
  AddUser: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type User = {
  id: number;
  name: string;
  email: string;
};

const HomeScreen = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const isFocused = useIsFocused(); 

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://192.168.3.8:3000/users"); 
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchUsers();
    }
  }, [isFocused]);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://192.168.3.8:3000/users/${id}`); 
      Alert.alert("Usuário excluído", `O usuário com ID ${id} foi excluído.`);
      setUsers(users.filter(user => user.id !== id)); 
    } catch (error) {
      console.error("Erro ao excluir o usuário:", error);
      Alert.alert("Erro", "Erro ao excluir o usuário.");
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("AddUser")}
          title="Novo Usuário"
          color="#6200ea"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UserCard
            id={item.id}
            name={item.name}
            email={item.email}
            onDelete={handleDelete} 
          />
        )}
        contentContainerStyle={styles.list}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
