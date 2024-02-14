import React from 'react'
import { Button, Image, Text, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';


const Drawer =createDrawerNavigator();
export const Pantalla2Screen = () => {
  const {width}=useWindowDimensions ();

  //Hook navegación
  const navigation=useNavigation();

  return (
    

    <View style={styles.globalMargin}>
        <Text style={styles.title}>Bienvenido</Text>
        <Image
            source={{
                uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGF8dO9D41z0uRMDu2VGEW1znKEk7S-1HqAxTnN19VQ&s'
            }}
            style={styles.avatar}/>
    </View>

  )
}


