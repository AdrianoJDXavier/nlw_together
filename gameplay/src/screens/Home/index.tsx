import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';

import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appointments = [
      {
        id: '1',
        guild: {
          id: '1',
          name: 'Lendários',
          icon: null,
          owner: true
        },
        category: '1',
        date: '21/06 às 13:40h',
        description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
      },
      {
        id: '2',
        guild: {
          id: '1',
          name: 'Lendários',
          icon: null,
          owner: true
        },
        category: '1',
        date: '21/06 às 13:47h',
        description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
      },

    ]

    function handleCategorySelect(categoryId: string) {
      categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmainDetails() {
      navigation.navigate('AppointmainDetails');
    }

    function handleAppointmainCreate() {
      navigation.navigate('AppointmentCreate');
    }

    return (
      <Background>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmainCreate}/>
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader
            title="Partidas agendadas"
            subtitle="Total 6"
          />

          <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
              <Appointment 
                data={item} 
                onPress={handleAppointmainDetails}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Background>
    );
  }
