import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LoadingComponent = () => {
  return (
    <View style={styles.loadingContainer}>
    <Text>Loading...</Text> {/* You can replace this with a spinner or progress bar */}
</View>
  )
}
const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingComponent