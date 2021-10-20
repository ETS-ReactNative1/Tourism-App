import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const PlaceSingle = ({ navigation, route }) => {


    const [page, setPage] = useState(true)
    const [select, setSelect] = useState(1)


    const item = [{ id: 1, title: 'Overview' },
    { id: 2, title: 'Gallery' }]

    const content = [{ id: 1, title: 'Why Not Go', description: 'deufgirifug3f3gfo4shfe3g' }]



    const handle = (e) => {
        setSelect(e)
        if (e === 1) {
            setPage(true)
            console.log(e, 'dd')
        } else {
            setPage(false)
            console.log(e)
        }
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.subContainer}>
                    <ImageBackground imageStyle={{ borderBottomRightRadius: 30 }} style={styles.imageHotel} source={{ uri: route.params.item.image }}>
                        <View style={styles.subImg}>
                            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                                <Icon name={"keyboard-backspace"} size={35} color={'black'} />
                            </TouchableOpacity>
                            <View style={styles.name}>
                                <Text style={{ fontSize: 30, fontFamily: liteFont, color: 'white' }}>{route.params.item.place},{ }</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name={"map-marker-radius"} size={18} color={'orange'} />
                                    <Text style={{ fontSize: 16, fontFamily: boldFont, color: 'white' }}> {route.params.item.location}</Text>
                                </View>

                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.sub}>
                        <View style={styles.title}>
                            {item.map(item =>
                                <TouchableOpacity key={item.id}>
                                    <Text style={select == item.id ? { ...styles.over, borderBottomWidth: 2, borderBottomColor: 'orange', } : { ...styles.over, color: 'grey' }} onPress={() => handle(item.id)}>{item.title}</Text>
                                </TouchableOpacity>)}
                        </View>
                    </View>
                    <View>

                        {page === true ?
                            <View>
                                <Text>{route.params.item.description}</Text>
                            </View> : <Text>{route.params.item.location}</Text>}
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default PlaceSingle


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
    },
    subContainer: {
        padding: '0%',
        // elevation:2,
    },
    imageHotel: {
        height: 350,
        width: '100%',
        // flex: 1,
        resizeMode: 'cover',

    },
    subImg: {
        height: 350,
        width: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        borderBottomRightRadius: 30,
    },
    sub: {
        padding: '3%'
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 5
    },
    over: {
        fontSize: 20,
        fontFamily: liteFont,
        color: 'black',
    },
    border: {
        borderColor: "orange",

    },
    back: {
        padding: '2%',
        width: '15%',
    },
    name: {
        padding: '4%',
        marginTop: '60%',
        // backgroundColor: 'blue'
    }
})