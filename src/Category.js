import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Category = () => {

    const [search, setSearch] = useState('')

    const filterList = (list) => {
        return list.filter(listItem => listItem.toLowerCase().includes(search.toLowerCase()));

    }
    const list = ['The Weeknd', 'Drake', 'Roddy Ricch', 'Dua Lipa','faheem'];


    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={(search) => setSearch(search)}
                style={styles.searchBar}
            />
            {filterList(list).map((list, index) => (
                    <Text key={index} style={styles.itemText}>{list}</Text>
                ))}
        </View>
    )

}


export default Category


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        height: '100%',
    },
    searchBar: {
        fontSize: 24,
        margin: 10,
        width: '90%',
        height: 50,
        backgroundColor: 'white',
    },
    itemText: {
        margin: 10,
        color: 'white',
        fontSize: 24,
        backgroundColor: 'blue',
        width: '100%',
        height: 50
    }
});