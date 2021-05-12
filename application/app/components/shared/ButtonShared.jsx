import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
const ButtonShared = (props) => {
    return (
      <View>            
          <TouchableOpacity
          style={styles.button}
          onPress={props.onPress}
          >
          <Text style={{color:'white',fontSize:16}}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default ButtonShared

const styles = StyleSheet.create({
    button: {
      backgroundColor: "#E4A718",
      padding: 10,
      marginTop: 25,
      borderRadius: 30,
      alignItems: 'center',
    }
});