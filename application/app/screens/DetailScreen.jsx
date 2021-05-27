import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { LineChart } from 'react-native-chart-kit';
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
            itemID:this.props.route.params.itemID,
            dataID: [],
            isLoading: false,
            times:[0],
            price:[0],
        };
    }
    
    componentDidMount() {
        this.getCoinByID();
        this.asyncChartData();
    }

    timeToDay (timestamp) {
                      
        var a = new Date(timestamp);
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];    
        return days[a.getDay()]
    };

    async asyncChartData () {
        try {
            const response = await axios.get(
                `https://api.coincap.io/v2/assets/${this.state.itemID}/history?interval=d1`,
            ); 
    
            const priceUsdArray = await response.data.data.map(item => item.priceUsd);
            const dateArray  = await response.data.data.map(item => this.timeToDay(item.time));

            this.setState({
                price:priceUsdArray.slice(-6),
                times:dateArray.slice(-6)
            })
    
        } catch (error) {
            console.log(error.message);
        }
    };
    
    async getCoinByID() {
        try {
            const response = await axios.get('https://api.coincap.io/v2/assets/'+this.state.itemID)
            // const response = await axios.get('https://api.coincap.io/v2/assets/bitcoin')
            this.setState({dataID:response.data.data})
        } catch (error) {
            console.error(error);
            this.setState({isLoading:true})
        }
    }

    render() { 

        const {dataID, times, price} = this.state
        // console.log(dataID.symbol.toLowerCase().indexOf(keyword));
        return (
            <View style={styles.container}>
                {/* <ListItem>
                    <Image source={{uri: `https://assets.coincap.io/assets/icons/${dataID.symbol}@2x.png`}} style={{width:100, height:100}} />
        
                </ListItem> */}
                <View >
                    <View style={{flexDirection:'row'}}>
                        {/* <Image source={{uri: `https://assets.coincap.io/assets/icons/${dataID.symbol.toLowerCase()}@2x.png`}} style={{width:100, height:100}}/> */}
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
                        <View>
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
                {/* <Chart/> */}

                <LineChart
                    data={{
                        labels: times,
                        datasets: [{
                            data: price
                        }],
                    }}
                    verticalLabelRotation={110}
                    width={Dimensions.get('window').width} // from react-native
                    height={220}
                    yAxisLabel={'$'}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        marginRight:20,
                    }}
                />
            </View>
        );
    }
}

export default DetailScreen;