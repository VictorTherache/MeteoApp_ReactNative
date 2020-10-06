import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import WeatherRow from './WeatherRow';

export default class List extends React.Component {

  state = {
    data2: []
  };

  componentDidMount() {
    this.fetchData2();
  }

  fetchData2 = async () => {
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${this.props.route.params.city}&key=5666f6e97c9e431fbbfb506f040a0ed9`);
    const json = await response.json();
    this.setState({ data2: json.data });
    // console.log(this.state.data2)
  };

  render() {
    let indexArray = []
    return (
      <View >
        <FlatList
          data={this.state.data2}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item, index }) =>
          // console.log(index)
          // indexArray.push('hey')
          // <Text>Hi</Text>*
          < WeatherRow data={this.state.data2} index={index} />
        }
        />
      </View>
    );
  }
}

