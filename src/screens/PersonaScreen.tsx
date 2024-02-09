import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigator/StackNavigator';

// interface RouterParams{
//     id:number;
//     name: string;
// }

interface Props extends StackScreenProps<RootStackParamList,'PersonaScreen'>{};

export const PersonaScreen = ({route, navigation}:Props) => {
    //console.log(props)

    const params = route.params;

    useEffect(()=>{
        navigation.setOptions({
            title:params.name
        })
    })

  return (
    <View style={styles.globalMargin}>
        <Text>{JSON.stringify(params, null, 3)}</Text>
    </View>
  )
}
