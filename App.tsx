import 'react-native-gesture-handler'; 
import React from 'react'
 import { NavigationContainer } from '@react-navigation/native';
 import { StackNavigation } from './src/navigator/StackNavigator';
import { LateralMenuCustom } from './src/navigator/LateralMenuCustom';
import { LateralMenu } from './src/navigator/LateralMenu';
 
 export const App = () => {
   return (
     <NavigationContainer>
      {/*<StackNavigation/>*/}
      {/*<LateralMenu/>*/}
      <LateralMenuCustom/>
     </NavigationContainer>
   )
 }
  export default App;
  

