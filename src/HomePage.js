import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



import Slider from './slider/Slider'


const HomePage = ({ navigation }) => {



    const category = [{ id: 1, name: 'Camping', image: 'https://i.pinimg.com/originals/ec/6c/73/ec6c733bbe59569b43e1d034118aa090.jpg' },
    { id: 2, name: 'Mountains', image: 'https://image.shutterstock.com/image-vector/ice-peak-mountain-green-meadows-260nw-1337286755.jpg' },
    { id: 3, name: 'Camping', image: 'https://i.pinimg.com/originals/ec/6c/73/ec6c733bbe59569b43e1d034118aa090.jpg' },
    { id: 4, name: 'Camping', image: 'https://i.pinimg.com/originals/ec/6c/73/ec6c733bbe59569b43e1d034118aa090.jpg' },
    { id: 5, name: 'Camping', image: 'https://i.pinimg.com/originals/ec/6c/73/ec6c733bbe59569b43e1d034118aa090.jpg' },


    ]



    return (
        <View style={styles.container}>
            <ImageBackground imageStyle={{ borderBottomRightRadius: 40 }} style={styles.imageHotel} source={{ uri: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                    <View>
                    <View style={styles.bgm}>
                        <View style={styles.titleHead}>
                            <Text style={{ fontSize: 20, color: 'black', fontFamily: liteFont }}>Categories</Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, color: 'orange', fontFamily: liteFont }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                {category.map(item =>
                                    <TouchableOpacity activeOpacity={0.8} style={styles.Art} key={item.id}>
                                        <View style={styles.imgContainer}>
                                            <Image style={styles.img} source={{ uri: item.image }} />
                                        </View>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}> {item.name}</Text>
                                    </TouchableOpacity>)}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{paddingHorizontal:'5%'}}>
                        <Text>dhihd</Text>
                        <Text>dhihd</Text>
                    </View>
                    
                    </View>
                    </ScrollView>
            </ImageBackground>
            

            </View>


    )
}

export default HomePage

const styles = StyleSheet.create({
    main:{
        height: '100%',
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
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
        borderBottomRightRadius: 40,
    },
    imageHotelContent:
    {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        height: 280,
        borderBottomRightRadius: 40,
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
        backgroundColor: '#fff',
        padding: '5%',
        height: 150,
    },
    titleHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover',
        overflow: 'hidden',
        borderRadius: 6
    },
    imgContainer: {
        width: 60,
        height: 45,
        flex: 1
    },
    Art: {
        width: 130,
        height: 60,
        padding: 6,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 6
    },
    category: {
        flexDirection: 'row',
        // height: 100,
        marginVertical: 25
    }


})


