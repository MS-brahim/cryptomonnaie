import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
class DetailScreen extends Component {
    render() { 
        return (
            <View style={styles.container}>
                <Text>DetailScreen</Text>
            </View>
        );
    }
}
 
export default DetailScreen;