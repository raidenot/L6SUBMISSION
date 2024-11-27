import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/native-stack";
import Home from "./Home.js";
import Add from "./Add.js";
import Edit from "./Edit.js";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Add' component={Add} />
                <Stack.Screen name='Edit' component={Edit} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
