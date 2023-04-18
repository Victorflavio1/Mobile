import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Box = ({children}) => {
  return (
    <View style={styles.container}>{children}</View>
  )
}

export default Box

const styles = StyleSheet.create({
container:
    {
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'coral',
        flex: 1,
        padding: 5,
    },

});