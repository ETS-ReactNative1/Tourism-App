import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import LoginScreen from './Login';
import LoaderScreen from './Loader';
import SignupScreen from "./Signup";
import HomePageScreen from "./HomePage";




// const Tab1 = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();



// const HomeTabs = () => {
//     return (
//         <Tab.Navigator screenOptions={{ headerShown: false }} tabBarOptions={{ showLabel: false }}>
//             <Tab.Screen name="Category" options={{
//                 tabBarIcon: ({ focused, color }) => (
//                     <Icon name="home" color={focused ? 'green' : color} size={25} />
//                 ),
//             }} component={CategoryPageScreen} />
//             <Tab.Screen name="Profile" options={{
//                 tabBarIcon: ({ focused, color }) => (
//                     <Icon name="account-circle" color={focused ? 'green' : color} size={25} />
//                 ),
//             }} component={ProfileScreen} />


//         </Tab.Navigator>
//     )
// }





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
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreen} />
            <Stack.Screen name="HomePage" options={{ headerShown: false }} component={HomePageScreen} />


        </Stack.Navigator>
    );
};


export default Navigation