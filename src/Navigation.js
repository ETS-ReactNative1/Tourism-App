import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import LoginScreen from './Login';
import LoaderScreen from './Loader';
import SignupScreen from "./Signup";
import HomePageScreen from "./HomePage";
import AuthcheckScreen from "./Authcheck";
import ProfileScreen from "./Profile";

import Slider from './slider/Slider'





// const Tab1 = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false ,tabBarStyle: { borderRadius:10,height:52,elevation:1},}} tabBarOptions={{ showLabel: false }}>
            <Tab.Screen name="Category" options={{
                tabBarIcon: ({ focused, color }) => (
                    <Icon name="home-outline" color={focused ? '#f18100' : color} size={30} />
                ),
            }} component={HomePageScreen} />
            <Tab.Screen name="Profile" options={{
                tabBarIcon: ({ focused, color }) => (
                    <Icon name="account-outline" color={focused ? '#f18100' : color} size={30} />
                ),
            }} component={ProfileScreen} />


        </Tab.Navigator>
    )
}





// const MyTest = () => {
//     return (
//         <Tab1.Navigator
//             screenOptions={{
//                 tabBarLabelStyle: { color: 'white', fontWeight: 'bold', fontSize: 15, marginTop: 30 },
//                 tabBarItemStyle: {},
//                 tabBarStyle: { backgroundColor: '#085E55', padding: 3},

//             }}>
//             <Tab1.Screen name="CHATS"
//                 options={{

//                 }} component={HotelListScreen} />
//             <Tab1.Screen name="STATUS" component={foodListScreen} />
//             <Tab1.Screen name="CALLS" component={HotelSingleScreen} />

//         </Tab1.Navigator>
//     )
// }



const Navigation = () => {
    return (

        <Stack.Navigator >
            <Stack.Screen name="Loader" options={{ headerShown: false }} component={LoaderScreen} />
            <Stack.Screen name="Authcheck" options={{ headerShown: false }} component={AuthcheckScreen} />
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreen} />
            <Stack.Screen name="HomePage" options={{ headerShown: false }} component={HomeTabs} />
            <Stack.Screen name="Slider" options={{ headerShown: false }} component={Slider} />
            <Stack.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />





        </Stack.Navigator>
    );
};


export default Navigation