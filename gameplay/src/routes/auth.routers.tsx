import React from "react";
import { createStackNavigator} from '@react-navigation/stack';

import { theme } from '../global/styles/theme'

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { AppointmainDetails } from "../screens/AppointmaintDetails";

const { Navigator, Screen} = createStackNavigator();

export function AuthRouters() {
    return(
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle:{
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
          <Screen
            name="Signin"
            component={SignIn}
         />
         <Screen
            name="Home"
            component={Home}
         />
         <Screen
            name="AppointmainDetails"
            component={AppointmainDetails}
         />
        </Navigator>
    )
}
