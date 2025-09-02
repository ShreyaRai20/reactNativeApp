import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Search = ({ navigation }) => {
    return (
        <View>
            <Text>Search</Text>
            <Button title='Home' onPress={() => navigation.navigate('Home')} />
            <Button title='Profile' onPress={() => navigation.navigate('Profile', { id: 1, name: "shr" })} />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})