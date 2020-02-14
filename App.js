import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default class Charts extends Component {
  render() {
    const chart_wh = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']
    return (
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <Text style={styles.title}>Basic Pie Chart</Text>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
          />
          <Text style={styles.title}>Doughnut Shaped Pie Chart</Text>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.5}
            coverFill={'#fff'}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  },
  scrollview: {
    flex: 1
  }
})