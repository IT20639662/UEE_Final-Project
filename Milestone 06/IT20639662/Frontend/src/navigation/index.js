/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
import StartScreen from '../screens/startScreen';
import LoginType from '../screens/LoginType';
import LogregSeekerscreen from '../screens/LogregSeeker/LogregSeekerscreen';
import LogregProviderscreen from '../screens/LogregProvider/LogregProviderscreen';
import LoginProviderscreen from '../screens/LoginProvider/LoginProviderscreen';
import LoginSeekerScreen from '../screens/LoginSeeker/LoginSeekerScreen';
import RegisterSeekerscreen from '../screens/RegisterSeeker/RegisterSeekerscreen';
import RegisteProviderScreen from '../screens/RegisterProvider/RegisterProviderscreen';
import DashboardProviderscreen from '../screens/DashboardProvider/DashboardProviderscreen';
import ProfileProviderscreen from '../screens/ProfileProvider/ProfileProviderscreen';
import MyPostsProviderscreen from '../screens/MyPostsProvider/MyPostsProviderscreen';
import UpdateProviderscreen from '../screens/UpdateProvider/UpdateProviderscreen';
import AddPostsProviderscreen from '../screens/AddPostsProvider/AddPostsProviderscreen';
import UpdatePostProviderscreen from '../screens/UpdatePostProvider/UpdatePostProviderscreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>

    <Stack.Navigator >
        <Stack.Screen name="StartScreen" options={{headerShown: false}} component={StartScreen} ></Stack.Screen>
        <Stack.Screen name="LoginScreen"  component={LoginScreen} ></Stack.Screen>
        <Stack.Screen name="LoginType"options={{headerShown: false}} component={LoginType} ></Stack.Screen>
        <Stack.Screen name="SeekerRegLOG"options={{headerShown: false}} component={LogregSeekerscreen} ></Stack.Screen>
        <Stack.Screen name="ProviderRegLOG"options={{headerShown: false}} component={LogregProviderscreen} ></Stack.Screen>
        <Stack.Screen name="seekerLOG"options={{headerShown: false}} component={LoginSeekerScreen} ></Stack.Screen>
        <Stack.Screen name="SeekerReg"options={{headerShown: false}} component={RegisterSeekerscreen} ></Stack.Screen>
        <Stack.Screen name="ProviderReg"options={{headerShown: false}} component={RegisteProviderScreen} ></Stack.Screen>
        <Stack.Screen name="ProviderLOG"options={{headerShown: false}} component={LoginProviderscreen} ></Stack.Screen>
        <Stack.Screen name="ProviderDashboard"options={{headerShown: false}} component={DashboardProviderscreen} ></Stack.Screen>
        <Stack.Screen name="ProviderProfile"options={{headerShown: false}} component={ProfileProviderscreen} ></Stack.Screen>
        <Stack.Screen name="ProviderMyPosts"options={{headerShown: false}} component={MyPostsProviderscreen} ></Stack.Screen>
        <Stack.Screen name="ProviderUpdate"options={{headerShown: false}} component={UpdateProviderscreen} ></Stack.Screen>
        <Stack.Screen name="ProviderAddPosts"options={{headerShown: false}} component={AddPostsProviderscreen} ></Stack.Screen>
        <Stack.Screen name="ProviderUpdatePosts"options={{headerShown: false}} component={UpdatePostProviderscreen} ></Stack.Screen>



    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
