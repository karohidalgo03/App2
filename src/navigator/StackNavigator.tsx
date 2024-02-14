import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
//import { PersonaScreen } from '../screens/PersonaScreen';

//Lista de Screens que son parte de nuestra navegación
export type RootStackParamList={
    Pantalla1Screen: undefined,
    Pantalla2Screen: undefined,
    Pantalla3Screen: undefined,
    PersonaScreen:{id: number, name: string}
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation=()=>{
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle:{
                elevation:0
            },
            cardStyle:{
                backgroundColor:'white'
            }
        }}>
      <Stack.Screen name="Pantalla1Screen" options={{title: 'Bienvenido'}} component={Pantalla1Screen} />
      <Stack.Screen name="Pantalla2Screen" options={{title: 'Pantalla 1'}} component={Pantalla2Screen} />
      <Stack.Screen name="Pantalla3Screen" options={{title: 'Pantalla 2'}} component={Pantalla3Screen} />
      
    </Stack.Navigator>
  );
}









