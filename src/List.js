import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from "react-native";

import MyContext from './Contexts/Context'


const List = () => {
    const context = useContext(MyContext)



    const lis = [{ name: 'The Weeknd' },
    { name: 'Drake' }, { name: 'Roddy Ricch' },
    { name: 'faeem', phone: 756 }];
    return (
        <View>

            <View>
                {context.filterList(lis).map((list, index) => (
                    <TouchableOpacity style={{ backgroundColor: 'yellow', width: '100%' }} onPress={() => navigation.navigate('Places')} key={list.id}>
                        <Text>{list.phone}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default List
