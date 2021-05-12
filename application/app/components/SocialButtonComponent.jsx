import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
 
const styles = StyleSheet.create({
    SocialBtn: {
        padding: 10,
        marginTop: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection :'row'
    }
});
 
const SocialButton = ({title, btnType, color, backgroundColor}) => {
    return (
        <TouchableOpacity style={[styles.SocialBtn, {backgroundColor}]}>
            <View>
                <Icon style={{margin:10}} name={btnType} size={22} color={color}></Icon>
            </View>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}
 
export default SocialButton;