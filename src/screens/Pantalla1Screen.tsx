import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { RootStackParamList } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList,'Pantalla1Screen'>{};

export const Pantalla1Screen = ({navigation}:Props) => {
    //console.log(props)
  return (
    <View style={styles.globalMargin}>
        <TouchableOpacity style={styles.globalMargin}>
        <Button  
            title='IMAGEN 1'
            onPress={()=>navigation.navigate('Pantalla2Screen')}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles.globalMargin}>
       <Button 
            title='Formulario'
            onPress={()=>navigation.navigate('Pantalla3Screen')}/>
       </TouchableOpacity>
      
    </View>
  )
}

