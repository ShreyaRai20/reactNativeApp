import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const LowStock = ({ data }) => {
    return (
        <View>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}> Items </Text>
                <Text style={styles.headingText}> Quantity </Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.ItemContainer, { backgroundColor: item.stock > 25 ? "#d7f6bfff" : "#ffcccc" }]}>
                        <Text style={styles.ItemText}> {item.name} </Text>
                        <Text style={styles.ItemText}> {item.stock} </Text>
                    </View>
                )}
            />
        </View>
    )
}

export default LowStock

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    headingText: {
        fontWeight: '800',
        fontSize: 14
    },
    ItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderRadius: 5,
        paddingVertical: 5,
        margin: 2,
    },
    ItemText: {
        fontWeight: '500',
        fontSize: 12
    },
})