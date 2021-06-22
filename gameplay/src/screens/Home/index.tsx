import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';

export function Home() {
    return(
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <View>
                
            </View>
        </View>
    );
    
}