import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from "react-native";

import MyContext from './Contexts/Context'


const List = ({ navigation}) => {
    const context = useContext(MyContext)



    useEffect(() => {
        context.setLoading()
    }, []);





    const lis = [{ name: 'The Weeknd' },
    { name: 'Drake' }, { name: 'Roddy Ricch' },
    { name: 'faeem', phone: 756 }];


    if (context.loading) {
        return <View style={{ justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="small" color="#FD6244" /></View>
    }
    return (
        <View>

            <View>
                {context.filterList(lis).map((list, index) => (
                    <TouchableOpacity style={{ backgroundColor: 'yellow', width: '100%' }} onPress={() => navigation.navigate('Places')} key={list.id}>
                        <Text key={index} style={styles.itemText}>{list.name}</Text>
                        <Text>{list.phone}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default List

const styles = StyleSheet.create({

    itemText: {
        margin: 10,
        color: 'white',
        fontSize: 24,
        backgroundColor: 'blue',
        width: '100%',
        height: 50,
    }
    
    })
