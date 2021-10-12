import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from "react-native";
import axios from 'axios'

import MyContext from './Contexts/Context'
import './global';
import global from './global'

const List = ({ navigation }) => {
    const context = useContext(MyContext)



    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)




    useEffect(() => {
        getData()
    }, []);


    const getData = () => {
        var config = {
            method: 'get',
            url: global.baseUrl + 'api/places/',
            // headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                if (response.data.status === 200) {
                    setList(response.data.data)
                    setLoading(false)
                    console.log(list, "inside")
                }else{
                    console.warn('not found')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    if (loading) {
        return <View style={{ justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="small" color="#FD6244" /></View>
    }
    return (
        <View>

            <View>
                {context.filterList(list).map((list, index) => (
                    <TouchableOpacity style={{ backgroundColor: 'yellow', width: '100%' }} onPress={() => getData()}>
                        <Text key={index} style={styles.itemText}>{list.place}</Text>
                        <Text>{list.location}</Text>
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
