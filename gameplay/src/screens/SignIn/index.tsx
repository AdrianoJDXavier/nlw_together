import React from "react";
import {
    View,
    Text,
    Image
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ButtonIcon } from "../../components/buttonIcon";
import IllustrationImg from '../../assets/illustration.png';
import { styles } from "./style";


export function SignIn(){
  const navigation = useNavigation();

  function handleSignin() {
    navigation.navigate('Home');
  }

  return(
    <View style={styles.container}>

      <Image 
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
        />

        <View style={styles.content}>
            <Text style={styles.title}>
                Conecte-se {'\n'}
                e organize {'\n'}
                suas jogatinas
            </Text>

            <Text style={styles.subtitle}>
                Crie grupos para jogar seus games{'\n'}
                favoritos com seus amigos
            </Text>

        <ButtonIcon 
            title="Entrar com o discord"
            onPress={handleSignin}
        />
        </View>
    </View>
  );
}
