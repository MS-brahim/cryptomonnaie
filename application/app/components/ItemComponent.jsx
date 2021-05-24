import React, { Component } from 'react';
import { TouchableOpacity, ActivityIndicator, FlatList, View, ScrollView, Text } from 'react-native';
import { Avatar, ListItem, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
 
class Item extends Component {

    constructor(props) {
        super(props);
        

        this.state = {
            data: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.getCoin();
    }

    async getCoin() {
        try {
        const response = await axios.get('https://api.coincap.io/v2/assets',{params:{limit:10}})
            console.log(response.data.data[0]);
            this.setState({data:response.data.data})
        } catch (error) {
            console.error(error);
            this.setState({isLoading:true})
        }
    }

    // navigateToDetail() {
    //     props.navigation.navigate('Detail')
    // }

    render() { 
        const { data, isLoading } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor:'#fff' }}>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        style={{color:'red'}}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=> console.log('ok')}>
                            <ListItem>
                                <Avatar source={{uri: item.explorer}} />
                                {/* <Icon name={item.id}/> */}
                                <ListItem.Content style={{flex:5}}>
                                <ListItem.Title>{item.name}</ListItem.Title>
                                        <ListItem.Subtitle>{item.symbol}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Title style={{flex:5}}>
                                    ${ Number.parseFloat(item.priceUsd).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                </ListItem.Title>
                                <ListItem.Title > 
                                    { item.changePercent24Hr>0 ? 
                                    <Text style={{color:'green'}}> 
                                        {Number.parseFloat(item.changePercent24Hr).toFixed(2)}% 
                                    </Text>: <Text style={{color:'red'}}>
                                        {Number.parseFloat(item.changePercent24Hr).toFixed(2)}% 
                                    </Text>}
                                </ListItem.Title>
                            </ListItem>
                            </TouchableOpacity>
                        )}
                    />
                )}
            </View>
        );
    }
}
 
export default Item;