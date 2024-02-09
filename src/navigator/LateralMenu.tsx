import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const LateralMenu=()=> {
 const{ width}=useWindowDimensions();
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType:(width >= 786) ? 'permanent':'front'}}>
      
      <Drawer.Screen name="StackNavigation" options={{title:'Home'}} component={StackNavigation} />
      <Drawer.Screen name="SettingsScreen" options={{title:'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


