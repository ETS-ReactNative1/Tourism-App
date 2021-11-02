import React from 'react'
import { Text, View, TouchableOpacity, Linking, StyleSheet, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Places = () => {


    const list = [{ id: 1, name: 'Edakkal cave,Wayanad', image: 'https://gumlet.assettype.com/swarajya%2F2019-10%2Fc15839cf-81c2-47d5-a4df-84a5ff4fcef3%2FBandipur_National_park_road.jpg?w=640&q=75&auto=format%2Ccompress', phone: 'tel:750908331', web: 'https://www.morickapresort.com/' },
    { id: 2, name: 'Mullpperiyaar Dam,Idukki', image: 'https://static.theprint.in/wp-content/uploads/2018/08/2018_8img10_Aug_2018_PTI8_10_2018_000227B-696x392.jpg', phone: 'tel:7531', web: 'https://www.morickapresort.com/' },
    { id: 3, name: 'Kottakunnu,Malappuram', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Gavi%2C_Kerala.jpg', phone: 'tel:8331', web: 'https://www.morickapresort.com/' },
    { id: 4, name: 'Neyyar,Kollam', image: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg', phone: 'tel:750908331', web: 'https://www.morickapresort.com/' },
    { id: 5, name: 'Moonar,idukk', image: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4', phone: 'tel:8331', web: 'https://www.morickapresort.com/' },
    { id: 6, name: 'Pookote Lake,Wayanad', image: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4', phone: 'tel:750331', web: 'https://www.morickapresort.com/' },
    { id: 7, name: 'Edakkal cave,Wayanad', image: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4', phone: 'tel:7908331', web: 'https://www.morickapresort.com/' },]

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 50, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'orange', fontFamily: liteFont, textAlign: 'center', fontSize: 24 }}>Contact</Text>
            </View>
            <ScrollView>
                <View style={styles.subContainer}>
                    {list.map(item =>
                        <View style={styles.cardView} key={item.id}>
                            <View style={styles.card}>
                                <View style={styles.imageView}>
                                    <Image style={styles.image} source={{ uri: item.image }} ></Image>
                                </View>
                                <View style={styles.cardtitleView}>
                                    <Text style={{ color: 'orange', fontFamily: boldFont, fontSize: 20, textAlign: 'center' }}>{item.name}</Text>
                                    <View style={styles.contact}>
                                        <TouchableOpacity style={{ backgroundColor: '#f5fdf8', width: 100, alignItems: 'center', borderRadius: 6, elevation: 4 }}
                                            onPress={() => { Linking.openURL(item.phone); }}>
                                            <Text style={{ color: 'black', fontFamily: boldFont, }}>Phone</Text>
                                            <Icon name={"phone"} size={24} color={'green'} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ backgroundColor: '#f5fdf8', width: 100, alignItems: 'center', borderRadius: 6, elevation: 4 }}
                                            onPress={() => { Linking.openURL(item.web); }}>
                                            <Text style={{ color: 'black', fontFamily: boldFont, }}>Website</Text>
                                            <Icon name={"web"} size={24} color={'green'} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>)}
                </View>
            </ScrollView>
        </View>
    )
}

export default Places

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f1f5f9'
    },
    subContainer: {
        padding: '3%',
        paddingHorizontal: '6%',
        marginVertical: '3%',
    },
    card: {
        width: '100%',
    },
    cardView: {
        marginVertical: 10

    },
    imageView: {
        height: 40,
        width: '100%',
        borderRadius: 20,
        // elevation:4

    },
    image: {
        height: null,
        width: null,
        resizeMode: 'cover',
        flex: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    cardtitleView: {
        backgroundColor: '#fff',
        padding: '2%',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        elevation: 4

    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 15
    }
})
