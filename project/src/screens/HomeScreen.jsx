import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import AllItems from './AllItems'
import Create from './Create'
import LowStock from './LowStock'




const HomeScreen = () => {
    const [view, setView] = useState(0)
    const [data, setData] = useState([])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, view === 0 ? { backgroundColor: "green", } : null]}>
                    <Text
                        style={[styles.btnText, view === 0 ? { color: "white", } : null]}
                        onPress={() => { setView(0) }}>
                        All Items
                    </Text>
                </Pressable>
                <Pressable style={[styles.button, view === 1 ? { backgroundColor: "green", } : null]}>
                    <Text
                        style={[styles.btnText, view === 1 ? { color: "white", } : null]}
                        onPress={() => { setView(1) }}
                    >
                        Low Stock
                    </Text>
                </Pressable>
                <Pressable style={[styles.button, view === 2 ? { backgroundColor: "green", } : null]}>
                    <Text
                        style={[styles.btnText, view === 2 ? { color: "white", } : null]}
                        onPress={() => { setView(2) }}>
                        Create
                    </Text>
                </Pressable>
            </View>
            {view === 0 ? <AllItems data={data} /> : null}
            {view === 1 ? <LowStock data={data.filter((item) => item.stock < 25)} /> : null}
            {view === 2 ? <Create data={data} setData={setData} /> : null}
        </View >
    )
}

export default HomeScreen



const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        // flex: 1,
        backgroundColor: "white"
    },
    title: {
        margin: 5,
        fontSize: 25,
        fontWeight: 900,
    },
    buttonContainer: {
        margin: 5,
        flexDirection: "row",
        gap: 10,
    }
    ,
    button: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "green"
    },
    btnText: {
        color: "green",
        fontSize: 12
    }
});