import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import Login from "../screens/login";
import Home from "../screens/home";
import Menu from "../screens/menu";
import Conta from "../screens/conta";
import Cart from "../screens/cart";
const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>

        <Tab.Navigator screenOptions={{
            headerTransparent: true,
            headerShown: false,


            tabBarActiveTintColor: "#008389",
            tabBarInactiveTintColor: "black",

            tabBarLabelStyle: {
                width: '100%',
                flex: 1,
                fontWeight: 'bold',
                paddingTop: 10,
                fontSize: 16,
                lineHeight: 1,
                backgroundColor: 'white',
                
            },

            tabBarStyle: {
                width: '100%',
                height: 80,
                lineHeight: 1,
            },


        }}>
            <Tab.Screen
                name='Login' component={Login} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons  name="log-in" color={color} size={size} />)
                }} />

            <Tab.Screen
                name='Home' component={Home} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons  name="home" color={color} size={size} />)
                }} />

            <Tab.Screen
                name='Menu' component={Menu} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons  name="menu" color={color} size={size} />)
                }} />

            <Tab.Screen
                name='Cart' component={Cart} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons  name="cart" color={color} size={size} />)
                }} />

            <Tab.Screen
                name='Conta' component={Conta} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons  name="person" color={color} size={size} />)
                }} />

        </Tab.Navigator>
    </NavigationContainer>

}