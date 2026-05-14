//importa o react e o usestate
//UseState serve para criar valores que podem mudar na tela
import React, { useState } from 'react';
//Importa componentes nativos do react native
import {
   View, //caixa / área da tela
   Text, //textos
   Button, //Botão
   StyleSheet, //estilo
   TouchableOpacity // Botão customizável
 } from 'react-native-web';

 //componente principal APP
export default function App(){
  //Cria um estado (variavel php) chamado "pontos"
  //pontos = valor atual
  //setPontos = função para alterar o valor
  //0 = valor inicial
  const [pontos, setPontos] = useState(0);
  //Função para aumentar 1 ponto

  function aumentar(){
  //Pega o valor auto e o soma +1
    setPontos(pontos+1);
  }

  //Função para diminuir 1 ponto
  function diminuir(){
  //Pega o valor auto e subtrai -1
    setPontos(pontos-1);
  }

  //Função para resetar o contador
  function resetar(){
    //volta o valor para 0
    setPontos(0);
  }
  
  //Tudo o que está no RETURN aparece na tela
  return(
    //View principal do APP
    <View style={styles.container}>
      {/*Título do APP*/}
      <Text style={styles.titulo}>
        🎮Contador Game
      </Text>
      {/*Mostra o valor dos pontos*/}
      <Text style={styles.pontos}>{pontos}</Text>
      {/*Área dos botões +1 e -1*/}
      <View style={styles.areaBotoes}>
       <TouchableOpacity onPress={aumentar} style={styles.botao}>
        <Text style={styles.textoBotao}>+1</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={diminuir} style={styles.botao}>
        <Text style={styles.textoBotao}>-1</Text>
       </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={resetar} style={styles.botaoReset}>
        <Text style={styles.textoBotao}>Resetar</Text>
       </TouchableOpacity>
    </View>
  );
}

//área de estilos do APP
const styles = StyleSheet.create({
  //  Estilo da tela principal
  container:{
    //Ocupa a tela toda
    flex:1,
    //cor de fundo
    backgroundColor: '#121212',
    //centraliza horizontalmente
    alignItems: 'center',
    //centraliza verticalmente
    justifyContent:'center',
    //espaçamento interno
    padding:20, 
   },

   //estilo do título
   titulo:{
    //tamanho da fonte
    fontSize:32,
    //cor do texto
    color: '#00ff88',
    //texto em negrito
    fontWeight:'bold',
    //espaço abaixo
    marginBottom:30,
   },

   //estilo dos pontos
   pontos:{
    //tamanho gigante
    fontSize:80,
    //cor branca
    color:'#ffffff',
    //espaço abaixo
    marginBottom:40,
    //negrito
    fontWeight:'bold',
   },

   //área dos botões 
   areaBotoes:{
    //deixa um botão ao lado do outro
    flexDirection:'row',
    //espaço abaixo
    marginBottom:20,
   },

   //estilo dos botões
   botao:{
    //cor do botão
    backgroundColor:'#00ff88',
    //espaçamento vertical
    paddingVertical:15,
    //espaçamento horizontal
    paddingHorizontal:30,
    //arredonda as bordas
    borderRadius:12,
    //espaço entre botões
    marginHorizontal:10,
   },

   //estilo do botão resetar
   botaoReset:{
    //cor vermelha
    backgroundColor: '#ff3b30',
    //espaçamento vestical
    paddingVertical:15,
    //espaçamento horizontal
    paddingHorizontal:40,
    //arredonda as bordas
    borderRadius:12,
   },

   //estilo do texto dos botões
   textoBotao:{
    //tamanho das letras
    fontSize:22,
    //cor preta
    color: '#000',
    //negrito
    fontWeight:'bold',
   }

});


