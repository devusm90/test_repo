import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useFonts } from "expo-font";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import Otp from "./screens/Otp";
import SelectPurpose from "./screens/SelectPurpose";
import YourName from "./screens/YourName";
import Branch from "./screens/Branch";
import Personalised from "./screens/Personalised";
import Quiz from "./screens/Quiz";
import Test from "./screens/Test";
import Exam from "./screens/Exam";
import Learn from './screens/Learn';
import Revise from './screens/Revise';
import Notification from './screens/Notification';
import Search from './screens/Search';
import PostGraduation from "./screens/PostGraduation";



const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    RecoletaLight: require("./assets/fonts/RecoletaAlt-Light.ttf"),
    RecoletaRegular: require("./assets/fonts/Recoleta-Regular.ttf"),
    RecoletaMedium: require("./assets/fonts/Recoleta-Medium.ttf"),
    RecoletaBold: require("./assets/fonts/Recoleta-Bold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
  });



  if (!loaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">

      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="Personalised" component={Personalised} options={{headerShown:false}}/>
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={
          {
            headerTitle:"Create Account",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerTintColor:"#FFF1E4",
            headerTitleStyle: {  
              fontWeight: '400',  
              fontFamily:'PoppinsRegular',
              fontSize:16,
           }
          }
        }
        />

        <Stack.Screen
        name="SelectPurpose"
        component={SelectPurpose}
        options={
          {
            headerTitle:"SelectPurpose ",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerTintColor:"#FFF1E4",
            headerTitleStyle: {  
              fontWeight: '400',  
              fontFamily:'PoppinsRegular',
              fontSize:16,
           }
          }
        }
        />

      <Stack.Screen
        name="Home"
        component={Home}
        options={
          {
            headerTitle:"Your Account ",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerTintColor:"#FFF1E4",
            headerTitleStyle: {  
              fontWeight: '400',  
              fontFamily:'PoppinsRegular',
              fontSize:16,
           }
          }
        }
        />

        <Stack.Screen
        name="YourName"
        component={YourName}
        options={
          {
            headerTitle:"Your Name",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerTintColor:"#FFF1E4",
            headerTitleStyle: {  
              fontWeight: '400',  
              fontFamily:'PoppinsRegular',
              fontSize:16,
           }
          }
        }
        />




      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={
          {
            headerTitle:"Quiz",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerTintColor:"#FFF1E4",
            headerTitleStyle: {  
              fontWeight: '400',  
              fontFamily:'PoppinsRegular',
              fontSize:16,
           }
          }
        }
        />

      <Stack.Screen
        name="Branch"
        component={Branch}
        options={
          {
            headerTitle:"Your Name",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerTintColor:"#FFF1E4",
            headerTitleStyle: {  
              fontWeight: '400',  
              fontFamily:'PoppinsRegular',
              fontSize:16,
           }
          }
        }
        />
      <Stack.Screen
        name="Test"
        component={Test}
        options={
          {
            headerTitle:"Testing",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerTintColor:"#FFF1E4",
            headerTitleStyle: {  
              fontWeight: '400',  
              fontFamily:'PoppinsRegular',
              fontSize:16,
           }
          }
        }
        />
        <Stack.Screen
        name="Exam"
        component={Exam}
        options={
          {
            headerTitle:"Create Account",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerTintColor:"#FFF1E4",
            headerTitleStyle: {  
              fontWeight: '400',  
              fontFamily:'PoppinsRegular',
              fontSize:16,
           }
          }
        }
        />

      <Stack.Screen
        name="PostGraduation"
        component={PostGraduation}
        options={
          {
            headerTitle:"Post Graduation Details",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerTintColor:"#FFF1E4",
            headerTitleStyle: {  
              fontWeight: '400',  
              fontFamily:'PoppinsRegular',
              fontSize:16,
           }
          }
        }
        />

      <Stack.Screen
        name="Learn"
        component={Learn}
        options={
          {
            headerTitle:"Learn",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerTintColor:"#FFF1E4",
            headerTitleStyle: {  
              fontWeight: '400',  
              fontFamily:'PoppinsRegular',
              fontSize:16,
           }
          }
        }
        />
      <Stack.Screen
        name="Revise"
        component={Revise}
        options={
          {
            headerTitle:"Revise",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerTintColor:"#FFF1E4",
            headerTitleStyle: {  
              fontWeight: '400',  
              fontFamily:'PoppinsRegular',
              fontSize:16,
           }
          }
        }
        />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={
          {
            headerTitle:"Notification",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerTintColor:"#FFF1E4",
            headerTitleStyle: {  
              fontWeight: '400',  
              fontFamily:'PoppinsRegular',
              fontSize:16,
           }
          }
        }
        />
      <Stack.Screen
        name="Search"
        component={Search}
        options={
          {
            headerTitle:"Search",
            headerTitleAlign:"center",
            headerTransparent: true,
            headerTintColor:"#FFF1E4",
            headerTitleStyle: {  
              fontWeight: '400',  
              fontFamily:'PoppinsRegular',
              fontSize:16,
           }
          }
        }
        />



      </Stack.Navigator>
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  whiteText:{
    color: '#fff',

  },


});