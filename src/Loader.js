import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Wander, Flow } from 'react-native-animated-spinkit'

const Loader = ({ navigation }) => {

    setTimeout(() => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        })

    }, 1000)

    return (

        <View style={styles.container}>
            <Wander size={78} color="orange"
            />
        </View>
    )
}


export default Loader


const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }

})