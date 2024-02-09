import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { RootStackParamList } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList,'Pantalla3Screen'>{};

export const Pantalla3Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pantalla 2 Screen</Text>
        <Text style={styles.title}>IMAGEN 2</Text>

        <Image
            source={{
                uri:'https://thumbs.dreamstime.com/z/cerebro-de-dibujos-animados-con-mara%C3%B1a-pensamientos-desordenados-divertido-una-ilustraci%C3%B3n-plana-vectorial-aislada-sobre-fondo-204795958.jpg'
            }}
            style={styles.avatar}/>
     
    </View>
  )
}

