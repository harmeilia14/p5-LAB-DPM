import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from './screens/DetailsScreens';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Harmeilia Reski Rahmayani' }} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Kembali' }} // Opsional
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;