import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function NavWarinigShared() {
    return <View style={styles.bgHead}></View>
}

const styles = StyleSheet.create({
    bgHead : {
        height:100,
        width:'100%',
        backgroundColor: 'white',
        position: 'absolute',
        top:0,
    }
});