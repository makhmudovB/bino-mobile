import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();
const AppContainer = () => {
  const { response, token } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Auth"}>
        <Stack.Screen
          name="Auth"
          options={{
            header: () => null,
            gestureEnabled: false,
          }}
          component={AuthScreen}
        />
        <Stack.Screen
          name="Home"
          options={{
            header: () => (
              <Header
                barStyle={"dark-content"}
                bgColor="#fff"
                title="Фойдаланувчилар"
                role={response?.role}
              />
            ),
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
