import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart
// } from 'react-native-chart-kit'
 
// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     }
// });
 
class Chart extends Component {
    render() { 
        return (
            <View>
                <Text>Chart</Text>
                {/* <Text>
                    Bezier Line Chart
                </Text>
                <LineChart
                    data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [{
                        data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                        ]
                    }]
                    }}
                    width={Dimensions.get('window').width} // from react-native
                    height={220}
                    yAxisLabel={'$'}
                    chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                    }}
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                /> */}
            </View>
        );
    }
}
 
export default Chart;