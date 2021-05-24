import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios'

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
class DetailScreen extends Component {
    
    constructor(props) {
        super(props);
        
    
        this.state = {
            itemID: [],
            isLoading: false,
        };
    }
    
    componentDidMount() {
        this.getCoinByID();
    }
    
    async getCoinByID() {
        try {
            this.setState({itemID: this.props.route.params.itemID})
            const {itemID} = this.state;
            console.log(itemID);
            const response = await axios.get('https://api.coincap.io/v2/assets'+itemID)
            // console.log(response.data.data);
            this.setState({data:response.data.data})
        } catch (error) {
            console.error(error);
            this.setState({isLoading:true})
        }
    }

    render() { 
        const {itemID} = this.state
        return (
            <View style={styles.container}>
                <Text>DetailScreen {itemID}</Text>
            </View>
        );
    }
}
 
export default DetailScreen;