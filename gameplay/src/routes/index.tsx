import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRouters } from './auth.routers';

export function Routes() {
    return(
        <NavigationContainer>
            <AuthRouters />
        </NavigationContainer>
    )
}