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
        <View>
            <SliderBox images={image}
                dotColor="orange"
                inactiveDotColor="#90A4AE"
                sliderBoxHeight={150}
                paginationBoxVerticalPadding={20}
                parentWidth ={324}
                paginationBoxStyle={{
                    position: "absolute",
                    // bottom: 0,
                    // padding: 10,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10,
                }}
                imageLoadingColor="orange"
                autoplay={true}
                circleLoop={true}
                borderBottomLeftRadius={30}
                borderTopRightRadius={30}
                borderTopLeftRadius={10}
                borderBottomRightRadius={10}
            />
        </View>
    )
}

export default Slider