import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

import axios from 'axios'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    }
});
 
class DetailScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            itemID:this.props.route.params.itemID,
            dataID: [],
            isLoading: false,
        };
    }
    
    componentDidMount() {
        this.getCoinByID();
    }
    
    async getCoinByID() {
        try {
            const response = await axios.get('https://api.coincap.io/v2/assets/'+this.state.itemID)
            console.log(response.data.data);
            this.setState({dataID:response.data.data})
        } catch (error) {
            console.error(error);
            this.setState({isLoading:true})
        }
    }

    render() { 

        const {dataID} = this.state

        return (
            <View style={styles.container}>
                <ListItem style={{shadowColor: 'black',shadowOffset: {width: 0, height: 1},shadowOpacity: 0.2,elevation: 1}}>
                    {/* <Avatar source={{uri: `https://assets.coincap.io/assets/icons/${dataID.symbol.toLowerCase()}@2x.png`}} /> */}
                    <ListItem.Content style={{flex:5}}>
                        <ListItem.Title>{dataID.name}</ListItem.Title>
                        <ListItem.Subtitle>{dataID.symbol}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Title style={{flex:5}}>
                        ${ Number.parseFloat(dataID.priceUsd).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </ListItem.Title>
                    <ListItem.Title > 
                        { dataID.changePercent24Hr>0 ? 
                        <Text style={{color:'green'}}> 
                            {Number.parseFloat(dataID.changePercent24Hr).toFixed(2)}% 
                        </Text>: <Text style={{color:'red'}}>
                            {Number.parseFloat(dataID.changePercent24Hr).toFixed(2)}% 
                        </Text>}
                    </ListItem.Title>
                </ListItem>
            </View>
        );
    }
}
 
export default DetailScreen;