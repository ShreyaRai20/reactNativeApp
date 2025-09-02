import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Profile = ({ navigation, route }) => {
    const { id, name } = route.params
    return (
        <View>
            <Text>Profile</Text>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Button title='Home' onPress={() => navigation.navigate('Home')} />
            <Button title='Search' onPress={() => navigation.navigate('Search')} />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})