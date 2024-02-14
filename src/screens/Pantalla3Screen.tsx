
import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, View, useWindowDimensions, TouchableOpacity} from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer =createDrawerNavigator();
export const Pantalla3Screen = () => {
  const {width}=useWindowDimensions ();


  //Hook navegación
  const navigation=useNavigation();

  const [dato1, setDato1] = useState(0);
  const [dato2, setDato2] = useState(0);
  const [result, setResult] = useState('');
  const Result = dato1 / dato2;

  const handleComparison = () => {
    const num1 = parseFloat(dato1.toString());
    const num2 = parseFloat(dato2.toString());
    
    if (!isNaN(num1) && !isNaN(num2)) {
      if (num2 !== 0) {
        
        setResult(`El resultado de la división es ${Result}`);
      } else {
        setResult('NO EXISTE DIVISIÓN PARA CERO');
      }
    } else {
      setResult('Indeterminación');
    }
  };

    
  return (
    <SafeAreaView>
      <View style={styles.globalMargin}>
        <Text style={styles.title}>FORMULARIO #1</Text>

        <TextInput
         
          placeholder="Ingresa un número"
          keyboardType="numeric"
          value={dato1.toString()}
          onChangeText={(text) => setDato1(parseFloat(text))}
        />

        <TextInput
         
          placeholder="Ingresa un número"
          keyboardType="numeric"
          value={dato2.toString()}
          onChangeText={(text) => setDato2(parseFloat(text))} />
        <TouchableOpacity onPress={handleComparison} style={styles.button}>
          <Text style={styles.buttonText}>Dividir</Text>
        </TouchableOpacity>
        {/* Mostrar el resultado */}
        {result !== '' && <Text style={styles.resultado}>{result}</Text>}
       
        
      </View>
    </SafeAreaView>
  );
};







