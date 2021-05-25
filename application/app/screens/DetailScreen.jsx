import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

import axios from 'axios'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        padding:10
    }
});
 
class DetailScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            // itemID:this.props.route.params.itemID,
            dataID: [],
            isLoading: false,
        };
    }
    
    componentDidMount() {
        this.getCoinByID();
    }
    
    async getCoinByID() {
        try {
            // const response = await axios.get('https://api.coincap.io/v2/assets/'+this.state.itemID)
            const response = await axios.get('https://api.coincap.io/v2/assets/bitcoin')
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
        
                </ListItem>
                <View >
                    <View style={{flexDirection:'row'}}>
                        <Avatar source={{uri: `https://assets.coincap.io/assets/icons/${dataID.symbol}@2x.png`}} />
                        <View style={{marginHorizontal:30}}>
                            <ListItem.Title style={{fontWeight:'bold'}}>{dataID.name}({dataID.symbol})</ListItem.Title>
                            <Text >{((new Date().getDate() > 9) ? new Date().getDate() : ('0' + new Date().getDate())) + ' ' +((new Date().getMonth() > 8) ? (new Date().getMonth() + 1) : ('0' + (new Date().getMonth() + 1))) + ' ' + new Date().getFullYear()}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                        <View >
                            <ListItem.Subtitle>
                                HIGH <ListItem.Title> ${ Number.parseFloat(dataID.priceUsd).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</ListItem.Title>
                            </ListItem.Subtitle> 
                            <ListItem.Subtitle style={{marginVertical:20}}>
                                LOW <ListItem.Title> ${ Number.parseFloat(dataID.priceUsd).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</ListItem.Title>
                            </ListItem.Subtitle>                     
                        </View>
                        <View >
                            <ListItem.Subtitle>
                                AVERAGE <ListItem.Title> ${ Number.parseFloat(dataID.priceUsd).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</ListItem.Title>
                            </ListItem.Subtitle> 
                            <ListItem.Subtitle style={{marginVertical:20}}>
                                CHANGE <ListItem.Title> 
                                 { dataID.changePercent24Hr>0 ? 
                                    <Text style={{color:'green'}}> 
                                        {Number.parseFloat(dataID.changePercent24Hr).toFixed(2)}% 
                                    </Text>: <Text style={{color:'red'}}>
                                        {Number.parseFloat(dataID.changePercent24Hr).toFixed(2)}% 
                                    </Text>}
                                </ListItem.Title>
                            </ListItem.Subtitle>                     
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default DetailScreen;