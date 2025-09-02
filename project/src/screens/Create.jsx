import { StyleSheet, Text, View, FlatList, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const Create = ({ data, setData }) => {
    const [itemName, setItemName] = useState('')
    const [stock, setStock] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [editItemid, setEditItemid] = useState(null)

    const AddItem = () => {
        if (itemName !== '' && stock !== '') {
            const item = { id: Math.random(), name: itemName, stock: stock, unit: "kg" }
            setData([...data, item])
            setItemName('')
            setStock('')
        }
    }

    const editItem = () => {
        const filtedData = data.filter((item) => item.id !== editItemid)
        if (itemName !== '' && stock !== '') {
            const item = { id: editItemid, name: itemName, stock: stock, unit: "kg" }
            setData([...filtedData, item])
            setItemName('')
            setStock('')
            setIsEdit(false)
            setEditItemid(null)
        }
    }


    const hanldeDeleteItem = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const hanldeEditItem = (item) => {
        setIsEdit(true)
        setItemName(item.name)
        setStock(item.stock)
        setEditItemid(item.id)
    }

    return (
        <View style={styles.createContainer}>
            <TextInput
                placeholder='enter item name'
                placeholderTextColor='#999'
                style={styles.input}
                value={itemName}
                onChangeText={(text) => setItemName(text)}
            />
            <TextInput
                placeholder='enter item name'
                placeholderTextColor='#999'
                style={styles.input}
                value={stock}
                onChangeText={(text) => setStock(text)}
            />
            <Pressable style={styles.button} onPress={isEdit ? editItem : AddItem}>
                <Text style={styles.btnText}>{isEdit ? "Edit Item" : "Add Item"}</Text>
            </Pressable>

            <View style={{ marginTop: 10 }}>
                <Text style={styles.headingText}>All Items</Text>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.ItemContainer, { backgroundColor: item.stock > 25 ? "#d7f6bfff" : "#ffcccc" }]}>
                            <Text style={styles.ItemText}> {item.name} </Text>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <Text style={styles.ItemText}> {item.stock} </Text>
                                <Pressable onPress={() => hanldeEditItem(item)}>
                                    <Text style={styles.ItemText}>Edit</Text>
                                </Pressable>
                                <Pressable onPress={() => hanldeDeleteItem(item.id)}>
                                    <Text style={styles.ItemText}>Delete</Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default Create

const styles = StyleSheet.create({
    createContainer: {
        padding: '4%',
        gap: 5,
    },
    input: {
        color: 'black',
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 1,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#cabfeeff',
        color: 'white',
        borderColor: "#cabfeeff",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    btnText: {
        fontSize: 14,
        fontWeight: '800'
    },
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