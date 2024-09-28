import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  UserDetails: { userId: number };
  EditUser: { userId: number };
};

type UserCardNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UserDetails"
>;

type UserCardProps = {
  id: number;
  name: string;
  email: string;
  onDelete: (id: number) => void;  
};

const UserCard: React.FC<UserCardProps> = ({ id, name, email, onDelete }) => {
  const navigation = useNavigation<UserCardNavigationProp>(); // Navegação tipada

  const handleDelete = () => {
    Alert.alert(
      "Confirmação",
      "Você tem certeza que deseja excluir este usuário?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => onDelete(id),
        },
      ]
    );
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserDetails", { userId: id })}
      >
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </TouchableOpacity>

      {/* Botões de Editar e Excluir */}
      <View style={styles.buttonContainer}>
        <Button
          title="Editar"
          onPress={() => navigation.navigate("EditUser", { userId: id })} 
        />
        <Button
          title="Excluir"
          color="red"
          onPress={handleDelete} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f3f3f3",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#555",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default UserCard;
