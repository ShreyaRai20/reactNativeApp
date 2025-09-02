
// +++++++++++++++++++++++++++++++Navigation++++++++++++++++++++++++++++++++++++++

import { StyleSheet, Text, View } from "react-native"
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import Search from './src/screens/Search'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor:"white",
      tabBarActiveBackgroundColor:"black"
    }}>
      <Tab.Screen 
      name="Home" 
      component={Home} 
      // options={{headerShown:false, tabBarActiveBackgroundColor:"pink"}}
      />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

/*
const Stack = createNativeStackNavigator()

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen 
        name='Home' 
        component={Home}
        options={{headerShown:false}}
        />
      <Stack.Screen 
        name='Profile' 
        component={Profile}/>
      <Stack.Screen 
        name='Search' 
        component={Search}/>
    </Stack.Navigator>
  )
}
*/
const App = () => {
  return (
    <NavigationContainer>
      {/* <MyStack/> */}
      <MyTabs/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    color:'white',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

})




// +++++++++++++++++++++++++++++++Input++++++++++++++++++++++++++++++++++++++

/*
import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"


const App = () =>{
  const [input,setInput] = useState('')
  const [submittedText,setsubmittedText] = useState('')

  const handleSubmit = () => {
    setsubmittedText(input)
    setInput('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>hello!!!</Text>
      <TextInput 
      value={input}
      style={styles.input}
      placeholder="enter text here..."
      onChangeText={(text)=>setInput(text)}
      // multiline
      // numberOfLines={}
      />
      <Button title="submit" onPress={()=>handleSubmit}/>
      {submittedText ? <Text>Result: {input}</Text>:null}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{ 
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    color:"white"
  },
  title:{
    fontSize:20,
    fontWeight:"500"
  },
  input:{
    width:"100%",
    padding:5,
    borderWidth:1,
    borderRadius:10,
  }
  
})



*/

// +++++++++++++++++++++++++++++++FlatList++++++++++++++++++++++++++++++++++++++

/*
import { Text, View, StyleSheet, Image, FlatList } from "react-native"

const dummy = [
  {
    id: "1",
    name: "SHREYA RAI",
    email: "shreya.rai@example.com",
    image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000",
  },
  {
    id: "2",
    name: "AARAV PATEL",
    email: "aarav.patel@example.com",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fm=jpg&q=60&w=3000",
  },
  {
    id: "3",
    name: "ISABELLA JOHNSON",
    email: "isabella.johnson@example.com",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000",
  },
  {
    id: "4",
    name: "ETHAN SMITH",
    email: "ethan.smith@example.com",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?fm=jpg&q=60&w=3000",
  },
  {
    id: "5",
    name: "SOPHIA BROWN",
    email: "sophia.brown@example.com",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000",
  },
  {
    id: "6",
    name: "JAMES WILLIAMS",
    email: "james.williams@example.com",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?fm=jpg&q=60&w=3000",
  },
  {
    id: "7",
    name: "OLIVIA MILLER",
    email: "olivia.miller@example.com",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?fm=jpg&q=60&w=3000",
  },
  {
    id: "8",
    name: "MASON DAVIS",
    email: "mason.davis@example.com",
    image: "https://images.unsplash.com/photo-1546456073-6712f79251bb?fm=jpg&q=60&w=3000",
  },
  {
    id: "9",
    name: "AVA GARCIA",
    email: "ava.garcia@example.com",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?fm=jpg&q=60&w=3000",
  },
  {
    id: "10",
    name: "LIAM MARTINEZ",
    email: "liam.martinez@example.com",
    image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?fm=jpg&q=60&w=3000",
  },
  {
    id: "11",
    name: "EMMA RODRIGUEZ",
    email: "emma.rodriguez@example.com",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fm=jpg&q=60&w=3000",
  },
  {
    id: "12",
    name: "NOAH HERNANDEZ",
    email: "noah.hernandez@example.com",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?fm=jpg&q=60&w=3000",
  },
  {
    id: "13",
    name: "MIA LOPEZ",
    email: "mia.lopez@example.com",
    image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?fm=jpg&q=60&w=3000",
  },
  {
    id: "14",
    name: "BENJAMIN CLARK",
    email: "benjamin.clark@example.com",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?fm=jpg&q=60&w=3000",
  },
  {
    id: "15",
    name: "AMELIA LEWIS",
    email: "amelia.lewis@example.com",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fm=jpg&q=60&w=3000",
  },
  {
    id: "16",
    name: "ELIJAH WALKER",
    email: "elijah.walker@example.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000",
  },
  {
    id: "17",
    name: "HARPER HALL",
    email: "harper.hall@example.com",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?fm=jpg&q=60&w=3000",
  },
  {
    id: "18",
    name: "LOGAN ALLEN",
    email: "logan.allen@example.com",
    image: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?fm=jpg&q=60&w=3000",
  },
  {
    id: "19",
    name: "CHARLOTTE YOUNG",
    email: "charlotte.young@example.com",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?fm=jpg&q=60&w=3000",
  },
  {
    id: "20",
    name: "LUCAS KING",
    email: "lucas.king@example.com",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000",
  },
  {
    id: "21",
    name: "ELLA SCOTT",
    email: "ella.scott@example.com",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?fm=jpg&q=60&w=3000",
  }
]


const App = () => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={dummy} 
      numColumns={2}
      keyExtractor={item=>item.id} 
      renderItem={({item})=>(
        <View style={styles.card}>
        <Image style={{height:50,width:50,borderRadius:50}} source={{uri:item.image}}/>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
      </View> 
      )}
      ItemSeparatorComponent={()=><View style={{height:10}} />}
      columnWrapperStyle={{gap:10}}
      // extraData={}
      />

      <View style={styles.card}>
        <Image style={{height:50,width:50,borderRadius:50}} source={{uri:"https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"}}/>
          <Text>Naam</Text>
          <Text>Email</Text>
      </View> 
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor:"#dadada",
    paddingVertical:20,
    paddingHorizontal:5,
  },
  card:{
    width:100,
    height:100,
    backgroundColor:"white",
    borderRadius:10,
    padding:5,
    alignItems:"center",
    justifyContent:"center",
  }
})





 */





// ++++++++++++++++++++++++++++++++++++Instagram Story++++++++++++++++++++++++++++++++++++++++

/*

import { ScrollView, StyleSheet, View } from 'react-native'

const App = () => {
  return (
    <ScrollView contentContainerStyle={{gap:10}} style={styles.container} horizontal>
    <View style={styles.box1}/>
    <View style={styles.box2}/>
    <View style={styles.box3}/>
    <View style={styles.box4}/>
    <View style={styles.box1}/>
    <View style={styles.box2}/>
    <View style={styles.box3}/>
    <View style={styles.box4}/>
    <View style={styles.box1}/>
    <View style={styles.box2}/>
    <View style={styles.box3}/>
    <View style={styles.box4}/>
    <View style={styles.box1}/>
    <View style={styles.box2}/>
    <View style={styles.box3}/>
    <View style={styles.box4}/>
  </ScrollView>
  )
}

export default App



const styles =  StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"black",
    // gap:10, 
    padding:20,
  },
  box1: {
    height:90,
    width:90,
    backgroundColor:"red",
    borderRadius:50,
  },
  box2: {
    height:90,
    width:90,
    backgroundColor:"purple",
    borderRadius:50,
  },
  box3: {
    height:90,
    width:90,
    backgroundColor:"green",
    borderRadius:50,
  },
  box4: {
    height:90,
    width:90,
    backgroundColor:"pink",
    borderRadius:50,
  }
})

*/

// ++++++++++++++++++++++++++++++++++++first app++++++++++++++++++++++++++++++++++++++++

// // rnfes - reactnative funcion export and stylesheet

// import { StyleSheet, Text, View, Image, Button, Touchable, TouchableOpacity, TouchableHighlight, Alert, Pressable, useColorScheme } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
// // import React from 'react'

// const App = () => {
//   const theme = useColorScheme()
//   const isDarkMode = theme === "light"
//   const bgColor = isDarkMode ? "black" : "white"
//   const style = {
//     constainer:{padding:10,backgroundColor:"green"}
//   }
//   return (
//     // <View>
//       <SafeAreaView style={ [styles.containerdark, {backgroundColor:bgColor}]}>
//       {/* hello */}
//       <Text>Hello World!!!</Text>
//       <Text>use safeareaview for ios</Text>
//       <Image
//       style={{width:200, height:200}}
//       source={{uri:"https://images.unsplash.com/photo-1494253109108-2e30c049369b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww"}}/>
//       <Button title='submit'/>
//       <TouchableOpacity style={styles.constainer} onPress={()=> Alert.alert("presed button!!!")}>
//         <Text>TouchableOpacity</Text>
//       </TouchableOpacity>
//         <TouchableHighlight style={{padding:10,backgroundColor:"green"}} onPress={()=> Alert.alert("presed button!!!")}>
//         <Text>TouchableHighlight</Text>
//       </TouchableHighlight>
//       <Pressable style={{backgroundColor:"pink",padding:10}} onHoverIn={()=>{}}>
//         <Text>pressable</Text>
//       </Pressable>
// </SafeAreaView>
//     // {/* </View> */}

//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container:{
//         width:"100%",
//         height:"100%",
//         padding:10,
//         backgroundColor:"pink",
//         display:"flex",
//         // justifyContent: "center",
//         // alignItems:"center",
//         gap:10,
//       },

//       containerdark:{
//         width:"100%",
//         height:"100%",
//         padding:10,
//         backgroundColor:"black",
//         display:"flex",
//         // justifyContent: "center",
//         // alignItems:"center",
//         gap:10,
//       },

//       constainer:{
//         width:100,
//         padding:10,
//         backgroundColor:"purple",
//         borderColor:"black",
//         borderWidth:2,
//         borderRadius:15,
//       }
// })


