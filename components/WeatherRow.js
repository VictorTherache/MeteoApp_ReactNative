import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'; // ES6
import moment from 'moment'
import globalStyle from '../Style'
import 'moment/locale/fr'
import FadeInView from './animation/FadeInView'

// import './icons'

moment.locale('fr')

export default class WeatherRow extends React.Component {

    // static propTypes = {
    //     day: PropTypes.object,
    //     index: PropTypes.number
    // }


    day() {
        let day = Math.round(this.props.data[this.props.index].temp)
        return (
            <Text style={style.bold}>{day}</Text>
        )
    }

    date() {
        let date = this.props.data[this.props.index].valid_date
        var convertedDate = date.split(/\D/g)
        date = [convertedDate[2], convertedDate[1], convertedDate[0]].join("/")
        // let day = moment(this.props.data['daily'][this.props.index].dt * 1000).format('DD/MM')
        return (
            <Text style={style.bold}>{date}</Text>
        )
    }

     hello() {
        // Correct ! Cette utilisation de <div> fonctionne car div est une balise HTML valide :
        return <div>Hello </div>;
      }

    icon(size = 50) {
        const type = this.props.data[this.props.index].weather.description
        let image
        switch (type) {
            case 'Overcast clouds':
                image = require('./icons/Cloudy.png')
                break;
            case 'Clear Sky':
                image = require('./icons/Sun.png')
                break;
            case 'Few clouds':
                image = require('./icons/Sun_cloud.png')
                break;
            case 'Broken clouds':
                image = require('./icons/Sun_cloud.png')
                break;
            case 'Scattered clouds':
                image = require('./icons/Sun_cloud.png')
                break;
            case 'Light shower rain':
                image = require('./icons/Rain.png')
                break;
            case 'Moderate rain':
                image = require('./icons/Rain.png')
                break;
            case 'Heavy rain':
                image = require('./icons/Rain.png')
                break;
            default:
                image = require('./icons/Sun.png')
        }
        if (this.props.index === 0) {
            return <Image source={image} style={{ width: 80, height: 80 }} />   
        } else {
            return <Image source={image} style={{ width: 80, height: 80 }} />
        }
    }

    render() {
        this.day()
        if (this.props.index === 0) {
            return (
                <FadeInView>
                    <View style={[style.view, style.flex, style.firstView]}>
                        <View >
                            <Text style={{ color: '#FFF', fontSize: 30, marginBottom: 8 }}> {this.date()}</Text>
                            {this.icon()}
                        </View>
                        <View style={style.viewTemp}>
                            <Text style={{ color: '#FFF', fontSize: 35, marginRight: 0 }}> {this.day()}</Text>
                            <Text style={[style.temp, style.bold, { fontSize: 40, marginLeft: 0 }]}>
                                {/* {Math.round(this.props.data['daily'][this.props.index].temp.day)} */}
                            °C</Text>
                        </View>
                    </View>
                </FadeInView>
            )
        } else {
            return (
                <FadeInView>
                    <View style={[style.view, style.flex]}>
                        <View style={style.flex}>
                            {this.icon()}
                            <Text style={{ fontSize: 20, marginLeft: 10, color: 'white' }}> {this.date()}</Text>
                        </View>
                        <Text style={[{ marginLeft: 10, fontSize: 25 }, style.white]}> {this.day()}</Text>
                        <Text style={[style.temp, style.bold, { fontSize: 25 }]}>
                            {/* {Math.round(this.props.data['daily'][this.props.index].temp.day)} */}
                            °C</Text>
                    </View>
                </FadeInView>                
            )
        }
    }
}

const style = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
    },
    viewTemp: {
        flexDirection: "row",
        alignItems: "center"
    },
    white: {
        color: '#FFF'
    },
    bold: {
        fontWeight: 'bold'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    firstView: {
        backgroundColor: '#e54b65',
        flexDirection: 'row'
    },
    view: {
        backgroundColor: '#2B2D42',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
        fontSize: 20

    },
    temp: {
        color: '#FFFF'
    }
})

