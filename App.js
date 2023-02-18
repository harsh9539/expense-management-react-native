import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function ExpenseOverview() {
  return <BottomTabs.Navigator>
    <BottomTabs.Screen name='RecentExpense' component={RecentExpenses} />
    <BottomTabs.Screen name='AllExpense' component={AllExpenses} />
  </BottomTabs.Navigator>
}



export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ManageExpense' component={ManageExpenses} />
          <Stack.Screen name='ExpenseOverview' component={ExpenseOverview} />
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
