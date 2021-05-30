import React, { Component } from 'react';
import { TouchableOpacity, ActivityIndicator, FlatList, View,ScrollView,  Text } from 'react-native';
import { Avatar, ListItem, Header } from 'react-native-elements';
import axios from 'axios'
import firebase from '../../Config'

export default class HomeScreen extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: false,
            solde:0,
            email:''
        };
    }

    componentDidMount() {
        this.getCoin();
        this.getUserInfo();
    }

    async getUserInfo(){
        try {
            await firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                const response = await axios.get('http://localhost:4000/api/v1/user/read/'+user.uid)
                // console.log(user);
                this.setState({solde:response.data, email:user})
                
            } else {
                console.log('No user is signed in.');
            }
        });
        } catch (error) {
            console.log(error);
        }
    }

    async getCoin() {
        try {
        const response = await axios.get('https://api.coincap.io/v2/assets',{params:{limit:10}})
            this.setState({data:response.data.data})
        } catch (error) {
            console.error(error);
            this.setState({isLoading:true})
        }
    }
    render() {
        const { data, isLoading, solde, email } = this.state;
    // console.log(solde);
        return (
        <ScrollView>
            <Header
                leftComponent={ <Text style={{color:'#fff', fontWeight:'bold'}}> {solde.solde}</Text>}
                rightComponent={<Text  style={{color:'#fff'}}> {email.email} </Text>}
                backgroundColor= 'orange'
            />
            <View style={{ flex: 1, backgroundColor:'#fff' }}>
                    {isLoading ? <ActivityIndicator style={{flex:1}}/> : (
                        <FlatList
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            style={{color:'red'}}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Detail',{itemID: item.id, soldeState:solde.solde,})} style={{shadowColor: 'black',shadowOffset: {width: 0, height: 1},shadowOpacity: 0.2,elevation: 1}}>
                                <ListItem>
                                    <Avatar source={{uri: `https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png `}} />
                                    {/* <Icon name={item.id} size={22}/> */}
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
        </ScrollView>
        );
    }
};