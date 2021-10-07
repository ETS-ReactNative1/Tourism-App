import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";


const Slider = ({ navigation}) => {

    const [image, setImage] = useState(
        [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree",
            "https://source.unsplash.com/1024x768/?tree",

        ]
    )


    return (
        <View style={{}}>
            <SliderBox images={image}
                dotColor="orange"
                inactiveDotColor="#90A4AE"
                sliderBoxHeight={150}
                paginationBoxVerticalPadding={20}
                // circleLoop
                // parentWidth ={200}
                paginationBoxStyle={{
                    position: "absolute",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10,
                }}
                ImageComponentStyle={{ borderRadius: 10, width: '80%', marginTop: 10 }}
                imageLoadingColor="orange"
                autoplay={true}
                circleLoop={true}
            />
        </View>
    )
}

export default Slider