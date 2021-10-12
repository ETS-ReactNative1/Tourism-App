import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Category = () => {

    const [search, setSearch] = useState('')

    const filterList = (lis) => {
        return lis.filter(listItem => listItem.name.toLowerCase().includes(search.toLowerCase()));

    }
    const lis = [{ name: 'The Weeknd' },
    { name: 'Drake' }, { name: 'Roddy Ricch' },
    { name: 'faeem', phone:756 }];


    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={(search) => setSearch(search)}
                style={styles.searchBar}
            />
            {filterList(lis).map((list, index) => (
                <View style={{backgroundColor:'yellow',width:'100%'}}>
                    <Text>{list.phone}</Text>
                    <Text key={index} style={styles.itemText}>{list.name}</Text>
                </View>
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
        height: 50,
    }
});