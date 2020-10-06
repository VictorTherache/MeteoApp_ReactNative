import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Button, Image } from 'react-native'
import style from '../Style'

export default class About extends React.Component {

    search() {
        this.props.navigation.navigate('Search')
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>A propos de l'application</Text>
                <View style={{flexDirection : 'row', alignItems: "baseline", marginBottom: 10}}>
                    <Text style={{marginBottom: 10}}>Créer avec  </Text>
                    <Image source={require('./icons/Heart.png')} style={{ width: 30, height: 30, marginRight: 6, position: 'relative', top: 4 }} />
                    <Text>avec React Native</Text>
                </View>
                <Text style={{marginBottom:20}}>- Par Victor Thérache</Text>
                <Button color={style.color} onPress={() => this.search()} title="Rechercher une ville" />
            </View>
        )
    }
}
