import React from 'react'
import { View, Button, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import style from '../Style'
import { createStackNavigator } from '@react-navigation/stack';
import About from './About';
import List from './List';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();

class Search extends React.Component {



    constructor (props) {
        super(props)
        this.state = {
            city: 'Montpellier',
            value: ''
        }
    }
    
    setCity (city) {
        this.setState({
            city: city
        })
    }
    submit () {
        this.props.navigation.navigate('List', {city: this.state.city})
    }

    render () {
        return (
            <View style={style.container}>
                <Text style={style.entrer_le_nom}>Entrer le nom d'une ville :</Text>
                <TextInput
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setCity(text)}
                // onSubmitEditing={(event) => this.textHandler( event.nativeEvent.text )}
                value={this.state.city}
                style={style.input}                
                onSubmitEditing={()=> this.submit()}
                value={this.state.city} />
                <Button color={style.color} style={style.button} onPress={() => this.submit()} title="Rechercher"/>
            </View>
        )
    }
}

export default class StackNavigator extends React.Component {
    static navigationOptions = {
        title: 'Rechercher une ville',
        tabBarIcon: ({tintColor}) => {
            return <Icon source={require('../user.png')}/>
        }
    }
        render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Search" component={Search} option={{
                    tabBarIcon: () => <Ionicons name="ios-contacts"  /> 
                }} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="List" component={List}
                options={({ route }) => ({ title: 'Météo à ' + route.params.city })} />
            </Stack.Navigator>
        )
    }
}
