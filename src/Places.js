import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Modal } from 'react-native'
import { LogBox } from 'react-native';

import ImageView from "react-native-image-viewing";


export const Places = () => {
    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])
    const images = [
        {   id: 1,
            uri: "https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg'",
        },
        {
            id:2,
            uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
        },
        {   id:3,
            uri: "https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg'",
        },
    ];

    const [visible, setIsVisible] = useState(false);

    return (
        <View style={{ height: '100%' }}>
            <View>
                <TouchableOpacity style={{ padding: 20, backgroundColor: 'red' }}
                    onPress={() => setIsVisible(true)}>
                    <Text>dheuf</Text>
                </TouchableOpacity>
                <ImageView
                images={images}
                imageIndex={0}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
                />
            </View>
        </View>
    )
}

export default Places
