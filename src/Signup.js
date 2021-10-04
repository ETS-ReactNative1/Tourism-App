import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import './global';
import global from './global'

const Signup = ({ navigation }) => {



    const [hidePass, setHidePass] = useState(true)


    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/aa.jpg')}>
                    </Image>
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Create Account</Text>
                        <Text style={{ fontSize: 18, marginVertical: 5, fontFamily: boldFont }}>Please sign up to continue</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                        <View style={styles.password}>
                            <Icon name={"email"} size={20} color={'orange'} />
                            <TextInput placeholder='Email' style={styles.search}>
                            </TextInput>
                        </View>
                        <View style={styles.username}>
                            <Icon name={"account"} size={20} color={'orange'} />
                            <TextInput placeholder='Username' style={styles.search}>
                            </TextInput>
                        </View>
                        <View style={styles.password}>
                            <Icon name={"lock"} size={20} color={'orange'} />
                            <TextInput placeholder='Password' style={styles.search}
                                secureTextEntry={hidePass ? true : false}>
                            </TextInput>
                            <Icon name={hidePass ? 'eye-off' : 'eye'} size={20} color={'grey'}
                                onPress={() => setHidePass(!hidePass)} />
                        </View>
                        <TouchableOpacity style={styles.btn}>
                            <ImageBackground style={styles.button} imageStyle={{ height: 50, width: 120, borderRadius: 40 }} source={require('../assets/bb.jpg')}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontFamily: liteFont, textAlign: 'center' }}>Sign Up</Text>
                                    <Icon style={{ marginTop: 3, marginLeft: 2 }} name={"arrow-right"} size={28} color={'white'} />
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontFamily: boldFont }}>Already have a  account ?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ fontFamily: liteFont, color: 'orange', }}> Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default Signup


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    imageContainer: {
        height: 130,
        width: 160,
        marginLeft: '60%',
    },
    image: {
        height: null,
        width: null,
        flex: 1,
        resizeMode: 'cover'
    },
    subContainer: {
        padding: '5%',
        // marginVertical: 22,
    },
    title: {
        marginVertical: 20
    },
    titleText: {
        color: 'black',
        // fontWeight: 'bold',
        fontSize: 32,
        fontFamily: liteFont,
    },
    search: {
        padding: 0,
        width: '100%',
        paddingLeft: 5,
        paddingRight: 20
    },
    username: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#f5f5fd',
        padding: 10,
        borderRadius: 40,
        width: '100%',
        paddingRight: '18%',
        marginVertical: '10%',
        borderWidth: 2,
        borderColor: 'orange',
    },
    password: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#f5f5fd',
        padding: 10,
        borderRadius: 40,
        width: '100%',
        paddingRight: '18%',
        borderWidth: 2,
        borderColor: 'orange',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
        marginLeft: 100,
        height: 50,
        width: 120,
        borderRadius: 40,
    },
    btn: {
        marginLeft: 100,
        flex: 1,
        marginVertical: 10,
        alignItems: 'center',
    },
    footer: {
        alignItems: 'center',
        marginTop: '20%'
    }
})
