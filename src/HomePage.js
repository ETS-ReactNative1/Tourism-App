import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



import Slider from './slider/Slider'


const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground imageStyle={{ borderBottomRightRadius: 70 }} style={styles.imageHotel} source={{ uri: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80' }}>
                <View style={styles.imageHotelContent}>
                    <View style={styles.subContainer}>
                        <View style={styles.title}>
                            <Text style={{ fontSize: 24, fontFamily: liteFont, color: 'white' }}>Hi</Text>
                            <Text style={{ fontSize: 22, fontFamily: baseFont, color: 'orange', marginLeft: 6 }}>Faheem,</Text>
                            <View style={{ paddingLeft: 190, alignItems: 'center' }}>
                                <Icon name={"bell-ring"} size={30} color={'orange'} />
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontSize: 24, color: 'white' }}>𝐰𝐡𝐞𝐫𝐞 𝐝𝐨 𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨  </Text>
                            <Text style={{ fontSize: 26, fontFamily: liteFont, color: 'orange', marginLeft: 6 }}>ɠơ </Text>
                            <Text style={{ fontSize: 25, fontFamily: liteFont, color: '#fff' }}>?̾</Text>
                        </View>
                        <TouchableOpacity style={styles.searchView} activeOpacity={0.7}>
                            <Icon name={"magnify"} size={22} color={'orange'} />
                            <Text style={{ color: '#f1f5f9', fontFamily: baseFont, fontSize: 16, paddingLeft: 5 }}>Search Places..</Text>

                        </TouchableOpacity>
                        <View style={styles.description}>
                            <Icon name={"walk"} size={12} color={'white'} />
                            <Icon name={"bike"} size={15} color={'orange'} />
                            <Icon name={"car-hatchback"} size={22} color={'white'} />
                            <Icon name={"bus-side"} size={24} color={'orange'} />
                            <Icon name={"train"} size={28} color={'white'} />
                            <Icon name={"sail-boat"} size={32} color={'orange'} />
                            <Icon name={"airplane-takeoff"} size={34} color={'white'} />
                        </View>
                    </View>
                </View>
                <View style={styles.bgm}>

                </View>
            </ImageBackground>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff'
    },
    subContainer: {
        padding: '5%',

    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageHotel: {
        height: 280,
        width: '100%',
        flex: 1,
        resizeMode: 'cover',
        borderBottomRightRadius: 70,
    },
    imageHotelContent:
    {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        height: 280,
        borderBottomRightRadius: 70,
    },
    searchView: {
        width: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        padding: 12,
        borderRadius: 12,
        marginVertical: 35,
        flexDirection: 'row',
        alignItems: 'center',
    },
    description: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    bgm: {
        height: '100%',
        backgroundColor: 'white'
    }

})


