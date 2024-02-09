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
        <Text style={styles.title}>Pantalla 1 Screen</Text>
        <Text style={styles.title}>IMAGEN 1</Text>
        <Image
            source={{
                uri:'https://png.pngtree.com/png-clipart/20200701/original/pngtree-children-s-software-programming-png-image_5401259.jpg'
            }}
            style={styles.avatar}/>
    </View>

  )
}

