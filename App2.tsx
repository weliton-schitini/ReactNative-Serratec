import React from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import Styles from "./style"; 
interface App2Props {
  navigateBack: () => void; 
}

export default function App2({ navigateBack }: App2Props) {
  return (
    <View style={Styles.inputContainer}>
      <TouchableOpacity onPress={navigateBack}>
        
          <Image
            source={require("./assets/seta-esquerda.png")}
            style={Styles.headerInputImg}
            accessibilityLabel="Ícone de Caminhão"
          />
        
        <TextInput style={Styles.inputStyle} placeholder="Buscar" />
      </TouchableOpacity>
    </View>
  );
}
