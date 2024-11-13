import React from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import Styles from "./style";
interface App2Props {
  navigateBack: () => void;
}

export default function App2({ navigateBack }: App2Props) {
  return (
    <View style={Styles.containerPage2}>
       <View style={Styles.inputContainer}>
      <TouchableOpacity onPress={navigateBack}>
        <Image
          source={require("./assets/seta-esquerda.png")}
          style={Styles.headerImg}
          accessibilityLabel="Ícone de Caminhão"
        />
      </TouchableOpacity>
      <TextInput style={Styles.inputStyle} placeholder="Buscar" />
      </View>

      <View style={Styles.pesquisasContainer}>
        <View style={Styles.pesquisasClockTextContainer}>
        <Image
          source={require("./assets/relogio.png")}
          style={Styles.pesquisasImg}
          accessibilityLabel="Ícone de Caminhão"
        />
        <Text>
          twister
        </Text>
        </View>
        <Image
        source={require("./assets/janela-fechada.png")}
        style={Styles.fecharImg}/>
      </View>

      <View style={Styles.pesquisasContainer}>
        <View style={Styles.pesquisasClockTextContainer}>
        <Image
          source={require("./assets/relogio.png")}
          style={Styles.pesquisasImg}
          accessibilityLabel="Ícone de Caminhão"
        />
        <Text>
          lander
        </Text>
        </View>
        <Image
        source={require("./assets/janela-fechada.png")}
        style={Styles.fecharImg}/>
      </View>
      <View style={Styles.pesquisasContainer}>
        <View style={Styles.pesquisasClockTextContainer}>
        <Image
          source={require("./assets/relogio.png")}
          style={Styles.pesquisasImg}
          accessibilityLabel="Ícone de Caminhão"
        />
        <Text>
          xre
        </Text>
        </View>
        <Image
        source={require("./assets/janela-fechada.png")}
        style={Styles.fecharImg}/>
      </View>
      <View style={Styles.pesquisasContainer}>
        <View style={Styles.pesquisasClockTextContainer}>
        <Image
          source={require("./assets/relogio.png")}
          style={Styles.pesquisasImg}
          accessibilityLabel="Ícone de Caminhão"
        />
        <Text>
          versys
        </Text>
        </View>
        <Image
        source={require("./assets/janela-fechada.png")}
        style={Styles.fecharImg}/>
      </View>

      <View>
      <Image
        source={require("./assets/cardPublicidade.jpg")}
        style={Styles.cardPublicidade}/>
      </View>
    </View>
   

      
    
  );
}
