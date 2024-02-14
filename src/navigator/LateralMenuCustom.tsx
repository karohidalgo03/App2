
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Drawer = createDrawerNavigator();

export const LateralMenuCustom=()=> {
 const{ width}=useWindowDimensions();
  return (
    <Drawer.Navigator
    screenOptions={{
       drawerType:(width >= 1000) ? 'permanent':'front'}}
       drawerContent={(props)=><MenuItems{...props}/>}>
       
      <Drawer.Screen name="StackNavigation"  component={StackNavigation} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuItems=({navigation}:DrawerContentComponentProps)=>{
    return(
    <DrawerContentScrollView>
        {/* Menú de imagenes*/}
        <View style={styles.avatarContainer}>
           
        </View>
        {/* Menú de opciones*/}
           <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuButton}
            onPress={()=>navigation.navigate('StackNavigation')}>
                
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton}
             onPress={()=>navigation.navigate('SettingsScreen')}>
                
            </TouchableOpacity>
           </View>
    </DrawerContentScrollView>
    )
}



