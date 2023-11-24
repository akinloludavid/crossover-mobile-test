import {
    Foundation,
    FontAwesome,
    Ionicons,
    MaterialIcons,
} from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import {  useColorScheme } from 'react-native'

import Colors from '../../constants/Colors'



export default function TabLayout() {
    const colorScheme = useColorScheme()

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Foundation name='home' size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='discover'
                options={{
                    title: 'Discover',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='compass' size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='activity'
                options={{
                    title: 'Activity',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name='timer' size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='bookmarks'
                options={{
                    title: 'Bookmarks',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name='bookmark' size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome
                            name='user-circle'
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
