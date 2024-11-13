import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Styles from './style'; 
import App2 from './App2'; 

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'app2'>('home'); 

  
  const navigateToApp2 = () => setCurrentScreen('app2');

  
  const navigateBackToApp = () => setCurrentScreen('home');

  return (
    <View style={Styles.container}>
      <StatusBar style="auto" />

      {currentScreen === 'home' ? (
       
        <View style={Styles.container}>
          <View style={Styles.iconContainer}>
            <TouchableOpacity >
              <Image
                source={require('./assets/lupa.png')}
                style={Styles.iconStyle}
                accessibilityLabel="Ícone de Pesquisa"
              />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image
                source={require('./assets/notificacao.png')}
                style={Styles.iconStyle}
                accessibilityLabel="Ícone de Notificação"
              />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image
                source={require('./assets/coracao.png')}
                style={Styles.iconStyle}
                accessibilityLabel="Ícone de Coração"
              />
            </TouchableOpacity>
          </View>

          <View style={Styles.navBtnsContainer}>
            <TouchableOpacity style={Styles.navBtns} onPress={() => console.log('Navegando para Petrópolis')}>
              <Text style={Styles.navBtnsText}>Petrópolis</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.navBtns} onPress={() => console.log('Navegando para Categoria')}>
              <Text style={Styles.navBtnsText}>Categoria</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.navBtns} onPress={() => console.log('Navegando para Filtros')}>
              <Text style={Styles.navBtnsText}>Filtros</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
          
            <View style={Styles.freteContainer}>
              <TouchableOpacity style={Styles.freteBtnLocalizacao} onPress={() => console.log("Frete na sua localização")}>
                <Image
                  source={require('./assets/localizacao (1).png')}
                  style={Styles.iconStyleFrete}
                  accessibilityLabel="Ícone de Localização"
                />
                <Text style={Styles.freteBtnText}>Na sua localização</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Styles.freteBtn} onPress={() => console.log("Frete em todo Brasil")}>
                <Image
                  source={require('./assets/caminhao-de-entrega.png')}
                  style={Styles.iconStyleFrete}
                  accessibilityLabel="Ícone de Caminhão"
                />
                <Text style={Styles.freteBtnTransport}>Em todo Brasil</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.publicidadeContainer}>
              <Text style={Styles.puplicidadeText}>Publicidade</Text>
            </View>
            
           
            <View style={Styles.productsContainer}>
              <Image
                source={require('./assets/sitio.jpg')}
                style={Styles.productImg}
                accessibilityLabel="Imagem do Produto"
              />
              <View style={Styles.productsTextContainer}>
                <Text style={Styles.textProducts}>Sitio Retiro Itaipava hospedagem com estrutura,co...</Text>
                <Text style={Styles.productsTextPrice}>R$500</Text>
                <Text>12 Novembro 24:50, Itaipava</Text>
              </View>
            </View>
            <View style={Styles.productsContainer}>
              <Image
                source={require('./assets/xre.jpg')}
                style={Styles.productImg}
                accessibilityLabel="Imagem do Produto"
              />
              <View style={Styles.productsTextContainer}>
                <Text style={Styles.textProducts}>Sitio Retiro Itaipava hospedagem com estrutura,co...</Text>
                <Text style={Styles.productsTextPrice}>R$500</Text>
                <Text>12 Novembro 24:50, Itaipava</Text>
              </View>
            </View>
            <View style={Styles.productsContainer}>
              <Image
                source={require('./assets/cds.jpg')}
                style={Styles.productImg}
                accessibilityLabel="Imagem do Produto"
              />
              <View style={Styles.productsTextContainer}>
                <Text style={Styles.textProducts}>Sitio Retiro Itaipava hospedagem com estrutura,co...</Text>
                <Text style={Styles.productsTextPrice}>R$500</Text>
                <Text>12 Novembro 24:50, Itaipava</Text>
              </View>
            </View>
           
          </ScrollView>

          <View style={Styles.footerImgContainer}>
            <TouchableOpacity >
              <Image
                source={require('./assets/casa.png')}
                style={Styles.footerImage}
                accessibilityLabel="Ícone de Caminhão"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToApp2}>
              <Image
                source={require('./assets/lupa.png')}
                style={Styles.footerImage}
                accessibilityLabel="Ícone de Caminhão"
              />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image
                source={require('./assets/botao-adicionar.png')}
                style={Styles.footerImage}
                accessibilityLabel="Ícone de Caminhão"
              />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image
                source={require('./assets/balao-de-fala (1).png')}
                style={Styles.footerImage}
                accessibilityLabel="Ícone de Caminhão"
              />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image
                source={require('./assets/hamburger.png')}
                style={Styles.footerImage}
                accessibilityLabel="Ícone de Caminhão"
              />
            </TouchableOpacity>
            
          </View>
        </View>
      ) : (
        
        <App2 navigateBack={navigateBackToApp} />
      )}
    </View>
  );
}
