
import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer =createDrawerNavigator();
export const Pantalla4Screen = () => {
  const {width}=useWindowDimensions ();


  //Hook navegación
  const navigation=useNavigation();

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [resultado, setResultado] = useState('');

  const handleComparison = () => {
    const num1 = parseFloat(number1.toString());
    const num2 = parseFloat(number2.toString());


    if (!isNaN(num1) && !isNaN(num2)) {
      
      setResultado(`El número ${num1} es mayor o igual al número ${num2}`);
    }
  };
  
  return (
    <SafeAreaView>
      <View style={styles.globalMargin}>
        <Text style={styles.title}>FORMULARIO #1</Text>
        <TextInput
         
          placeholder="Ingresa un número"
          keyboardType="numeric"
          value={number1.toString()}
          onChangeText={(text) => setNumber1(parseFloat(text))}
        />

        <TextInput
          placeholder="Ingresa un número"
          keyboardType="numeric"
          value={number2.toString()}
          onChangeText={(text) => setNumber2(parseFloat(text))} />
        <TouchableOpacity onPress={handleComparison} style={styles.button}>
          <Text style={styles.buttonText}>Mayor o igual que</Text>
        </TouchableOpacity>
        {/* Mostrar el resultado */}
        {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
       
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
          <Text style={styles.buttonText}>Ir a menor o igual que</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};








