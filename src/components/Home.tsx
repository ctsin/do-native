import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../App";
import { fetchPostWithThunkCreator, fetchPost } from "../slices/checkSlice";

export default function Home() {
  const dispatch = useDispatch();
  const post = useSelector(({ JSONPlaceholderAPI: { post } }: RootState) => post);
  const postFromThunkCreator = useSelector(
    ({ JSONPlaceholderAPI: { postFromThunkCreator } }: RootState) => postFromThunkCreator
  );

  useEffect(() => {
    dispatch(fetchPost(1));
    dispatch(fetchPostWithThunkCreator(2));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(post)}</Text>
      <Text>{JSON.stringify(postFromThunkCreator)}</Text>
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
