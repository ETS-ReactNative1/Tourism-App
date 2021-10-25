import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ReadMore from '@fawazahmed/react-native-read-more';


const Sections = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Text style={{ color: 'orange', fontFamily: boldFont, fontSize: 20 }}>Users Post</Text>
            </View>
            <ScrollView>
                <View style={styles.card}>
                    <View style={styles.cardTitle}>
                        <View style={{ padding: '2%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon name={"account-circle"} size={43}  />
                            <View style={{ marginRight: 125 }}>
                                <Text style={{ color: 'black', fontFamily: boldFont, fontSize: 16 }}>Muhammed faheem</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name={"map-marker-radius"} size={14} color={'black'} />
                                    <Text style={{ color: 'black', fontFamily: liteFont, fontSize: 12 }}>Idukki</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Icon name={"dots-vertical"} size={24} color={'black'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80' }} />
                    </View>
                    <View style={styles.description}>
                        <ReadMore numberOfLines={3} style={{ fontFamily: boldFont }}>
                            {
                                <Text>rtrfdirtualizedList: You have kjijpjopjnpojpjkejgiregjrieghirehgirehiawfjwepo </Text>
                                
                            }
                        </ReadMore>
                    </View>
                    <View style={styles.rating}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name={"star-half-full"} size={22} color={'green'} />
                            <Text style={{ fontSize: 18, color: 'green' }}>6/9</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default Sections


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f1f5f9'
    },
    navBar: {
        backgroundColor: 'black',
        padding: 15
    },
    cardTitle: {
        backgroundColor: 'white',
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover'
    },
    imageContainer: {
        height: 300,
        width: '100%'
    },
    rating: {
        paddingHorizontal: '2%',
        alignItems: 'flex-end',
    },
    description: {
        padding: '2%'
    },
    cardTitle: {
        marginTop: 10
    }
})
