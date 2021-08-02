import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <Text>Home</Text>
            <Button onPress={() => navigation.navigate('Details')}  title="Go to Details Page" />
        </View>
    )
}

export default Home
