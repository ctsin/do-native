import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchUser } from '../slices/userSlice';

export default function Home() {
  const dispatch = useDispatch();

  const { name, active, userId } = useSelector(
    (state: RootState) => state.user.details
  );

  useEffect(() => {
    dispatch(fetchUser('1'));
  }, []);

  return (
    <View style={styles.container}>
      {name ? (
        <Text>
          {name} is {active ? 'active' : 'inactive'}
        </Text>
      ) : null}
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
