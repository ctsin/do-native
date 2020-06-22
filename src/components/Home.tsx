import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { User } from "../interfaces/user.interface";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/users");
      const result = await res.json();
      setUsers(result);
    };

    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      {users.map(({ id, name }: User) => (
        <Text key={id}>{name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
