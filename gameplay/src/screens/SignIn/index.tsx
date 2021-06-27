import React from "react";
import {
    View,
    Text,
    Image,
    Alert
} from 'react-native';
import { ButtonIcon } from "../../components/buttonIcon";
import IllustrationImg from '../../assets/illustration.png';
import { styles } from "./style";
import { Background } from '../../components/Background';
import { useAuth } from "../../hooks/auth";

export function SignIn(){

  const {user, signIn} = useAuth();

  async function handleSignin() {
    try{
      await signIn();
    }catch (error){
      Alert.alert(error);
    }
  }

  return(
    <Background>
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
    </Background>
  );
}
