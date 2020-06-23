import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckStatus } from "../slices/checkSlice";

export default function Home() {
  const dispatch = useDispatch();
  const  checked = useSelector(({ checked }) => checked);

  useEffect(() => {
    dispatch(fetchCheckStatus());
  });

  return (
    <View style={styles.container}>
      <Text> {String(checked)}</Text>
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
