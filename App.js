import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from "@expo/vector-icons"
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function ExpenseOverview() {
  return <BottomTabs.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({ tintColor }) => {
        return <IconButton
          icon={"add"}
          size={24}
          color={tintColor}
          onPress={() => { navigation.navigate("ManageExpense") }} />
      },

    })}
  >
    <BottomTabs.Screen
      name='RecentExpense'
      component={RecentExpenses}
      options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" size={size} color={"lightgray"} />
      }}
    />
    <BottomTabs.Screen
      name='AllExpense'
      component={AllExpenses}
      options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={"lightgray"} />
      }}
    />
  </BottomTabs.Navigator>
}



export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <ExpensesContextProvider >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white'
            }}
          >
            <Stack.Screen name='ExpenseOverview' component={ExpenseOverview} options={{ headerShown: false }} />
            <Stack.Screen name='ManageExpense' component={ManageExpenses}
              options={{
                title: "Manage Expense",
                presentation: 'modal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
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
