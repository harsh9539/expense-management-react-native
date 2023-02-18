import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import {Ionicons} from "@expo/vector-icons"

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function ExpenseOverview() {
  return <BottomTabs.Navigator
  screenOptions={{
    headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
    headerTintColor:'white',
    tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
    tabBarActiveTintColor:GlobalStyles.colors.accent500
  }}
  >
    <BottomTabs.Screen 
    name='RecentExpense' 
    component={RecentExpenses} 
    options={{
      title:'Recent Expenses',
      tabBarLabel:'Recent',
      tabBarIcon:({color,size})=> <Ionicons name="hourglass" size={size} color={color}/>
    }}
    />
    <BottomTabs.Screen 
    name='AllExpense' 
    component={AllExpenses} 
    options={{
      title:'All Expenses',
      tabBarLabel:'All Expenses',
      tabBarIcon:({color,size})=> <Ionicons name="calendar" size={size} color={color}/>
    }}
    />
  </BottomTabs.Navigator>
}



export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ExpenseOverview' component={ExpenseOverview} options={{headerShown:false}} />
          <Stack.Screen name='ManageExpense' component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});   
