import React from 'react';
import { theme } from '../../global/styles/theme';
import { styles } from './style';
import{ View, Text } from 'react-native';
import { Avatar } from '../Avatar';

export type MembersProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
    data: MembersProps;
}

export function Members({ data }: Props) {
    const { on, primary} = theme.colors;
  const isOnline = data.status === 'online';
  return(
    <View style={styles.container}>
        <Avatar 
            urlImage={data.avatar_url}
        />

        <View>
            <Text style={styles.title}>
                { data.username }
            </Text>
        <View style={styles.status}>
            <View 
                style={[
                    styles.bulletStatus,
                    {
                        backgroundColor: isOnline ? on : primary
                    }
                ]}
            />

            <Text style={styles.nameStatus}>
                { isOnline? 'Disponivel' : 'Ocupado' }
            </Text>
        </View>
        </View>
    </View>
  );
}
