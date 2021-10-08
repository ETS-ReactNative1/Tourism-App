import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



import Slider from './slider/Slider'


const HomePage = ({ navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground imageStyle={{borderBottomRightRadius: 70, }} style={styles.imageHotel} source={require('./travel.jpg')}>
            <View style={styles.imageHotelContent}>
            <View style={styles.subContainer}>
            <View style={styles.title}>
                <Text style={{fontSize:22,fontWeight: 'bold',color:'white'}}>Hi</Text>
                <Text style={{ fontSize: 22, fontFamily: liteFont,color:'orange',marginLeft:6}}>Faheem</Text>
                <View style={{paddingLeft:190,alignItems: 'center'}}>
                <Icon name={"bell-ring"} size={26} color={'orange'} />
                </View>

            </View>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
            <Text style={{ fontSize: 22, fontFamily: liteFont,color:'white'}}>Where do u want to</Text>
            <Text  style={{ fontSize: 24, fontFamily: liteFont,color:'orange',marginLeft:6}}>go </Text>
            <Text style={{  fontSize: 25, fontFamily: liteFont,color:'#fff'}}>?</Text>
            </View>
            <View style={{ elevation:1}}>
            <TouchableOpacity style={styles.searchView} activeOpacity={0.7}>
            <Icon name={"magnify"} size={22} color={'orange'} />
                <Text style={{ color: '#f1f5f9',fontFamily: baseFont,fontSize:16,paddingLeft:5}}>Search Places..</Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
        </ImageBackground>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor:'#f1f5f9'
    },
    subContainer: {
        padding:'5%',

    },
    title: {
        flexDirection: 'row',
        alignItems:'center',
    },
    imageHotel: {
        height: 250,
        width: '100%',
        flex: 1,
        resizeMode: 'cover',
        borderBottomRightRadius: 70,
    },
    imageHotelContent:
    {
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        height: 250,
        borderBottomRightRadius: 70,
    },
    searchView:{
        width:'100%',
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        padding:12,
        borderRadius:12,
        marginVertical:25,
        flexDirection: 'row',
        alignItems: 'center',
    }

})


