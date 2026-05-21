//Importação para o menu lateral funcionar
import 'react-native-gesture-handler';

//Importar o container da navegação
//Ele controla todas as telas do app
import { NavigationContainer } from '@react-navigation/native';

//importar o menu lateral (DRAWER)
import { createDrawerNavigator } from '@react-navigation/drawer';

//importar as telas
import Jogador1 from './components/Jogador1';
import Jogador2 from './components/Jogador2';
import Jogador3 from './components/Jogador3';
import Jogador4 from './components/Jogador4';

//cria o DRAWER 
const Drawer = createDrawerNavigator();

//componente principal do app
export default function APP(){
  //o que esta dentro do return aparece na tela
  return (
    //container principal da navegação
    <NavigationContainer>
      {/*menu lateral*/}
      <Drawer.Navigator>
        {/* Tela do Jogador1 */}
        <Drawer.Screen
          // nome que aparece no menu
          name="1 Jogador"
          //componente que será aberto
          component={Jogador1}
        />
        <Drawer.Screen

        name="2 Jogador"
        component={Jogador2}
        />

         <Drawer.Screen

        name="3 Jogador"
        component={Jogador3}
        />

         <Drawer.Screen

        name="4 Jogador"
        component={Jogador4}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}