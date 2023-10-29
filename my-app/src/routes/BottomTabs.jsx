import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Private } from '../utils/PrivateRoute';

import Home from '../screens/Home';
import Posts from '../screens/Posts';
import Login from '../screens/Login';
import Admin from '../screens/Admin';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarStyle: {
          display: 'flex',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarLabelStyle: { fontSize: 16 },
        }}
      />
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="newspaper-o" color={color} size={size} />
          ),
          tabBarLabelStyle: { fontSize: 16 },
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="sign-in" color={color} size={size} />
          ),
          tabBarLabelStyle: { fontSize: 16 },
        }}
      />
      <Tab.Screen
        name="Admin"
        component={Admin}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cogs" color={color} size={size} />
          ),
          tabBarLabelStyle: { fontSize: 16 },
        }}
      />
    </Tab.Navigator>
  );
}
