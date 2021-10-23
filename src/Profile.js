import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal, TextInput } from 'react-native'
import './global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import global from './global'
import axios from 'axios'



export const Profile = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.subContainer}>
                    <View style={styles.navBar}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name={"arrow-left"} size={26} color={'orange'} />
                            <Text style={{ color: 'orange', fontFamily: liteFont, fontSize: 20, marginLeft: 80 }}>User Account</Text>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.username}>
                            <Icon name={"account"} size={20} color={'orange'} style={{ paddingRight: 5 }} />
                            <TextInput placeholder='Name' style={styles.search}>
                            </TextInput>
                        </View>
                        <View style={styles.username}>
                            <Icon name={"crosshairs-gps"} size={20} color={'orange'} style={{ paddingRight: 5 }} />
                            <TextInput placeholder='Visited Location' style={styles.search}>
                            </TextInput>
                        </View>
                        <View style={styles.textPara}>
                            <TextInput placeholder='Experience' style={styles.address}>
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ ...styles.username, width: 140 }}>
                                <Icon name={"account"} size={20} color={'orange'} />
                                <TextInput placeholder='Rating out of 9' style={styles.search}>
                                </TextInput>
                            </View>
                            <TouchableOpacity style={styles.imageButton}>
                                <Icon name={"camera"} size={22} color={'orange'} />
                                <Text style={{ color: 'white', fontFamily: liteFont, fontSize: 16 }}>Pick Image</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', marginVertical: 30 }}>
                        <TouchableOpacity style={{...styles.changePassword,backgroundColor:'white',borderColor:'orange',borderWidth:2,width:'80%'}}>
                            <View elevation={5} style={styles.lock}>
                                <Icon name={"upload"} color={"orange"} size={22} />
                            </View>
                            <Text style={{ fontFamily:boldFont, fontSize: 24,color: 'orange',textAlign: 'center'}}>Upload</Text>
                        </TouchableOpacity>
                            <TouchableOpacity style={styles.changePassword}>
                                <View elevation={5} style={styles.lock}>
                                    <Icon name={"arrow-right-bold-box-outline"} color={"orange"} size={22} />
                                </View>
                                <Text style={{ fontFamily:liteFont, fontSize: 20,color: 'black'}}>Sign Out</Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>
            </ScrollView>

        </View>
    )
}

export default Profile


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    subContainer: {
        // height: '100%',
    },
    navBar: {
        backgroundColor: 'black',
        padding: 15
    },
    search: {
        padding: 2,

    },
    inputContainer: {
        padding: '5%',
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'blue',
        marginTop: 40
    },
    username: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 4,
        borderWidth: 1,
        borderColor: 'orange',
        marginVertical: 8,

    },
    address: {
        position: 'absolute',
        textAlign: 'center',
        // paddingLeft: 8,
        width: '100%',
        fontFamily: baseFont,
        fontSize: 16
    },
    textPara: {
        backgroundColor: 'white',
        width: '100%',
        paddingVertical: '20%',
        borderRadius: 20,
        elevation: 4,
        borderWidth: 1,
        borderColor: 'orange',
        marginVertical: 8,
    },
    imageButton: {
        backgroundColor: 'black',
        padding: '5%',
        borderRadius: 20,
        width: 160,
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    changePassword: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '3%',
        paddingHorizontal:20,
        flexDirection: 'row',
        borderRadius:12,
        justifyContent: 'space-around',
        marginVertical: 10,
        elevation: 5,
        width: '90%',
        paddingRight:60,

    },
    lock: {
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        borderRadius: 5,
    }
})
