import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "./screens/AuthScreen";
import UsersScreen from "./screens/UsersScreen";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import ObjectsScreen from "./screens/ObjectsScreen";
import Drawer from "./components/Drawer";
import global from "./resourses/global";

const Stack = createStackNavigator();
const AppContainer = () => {
  const [drawer, setDrawer] = useState(false);
  const { response, token } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={!!token ? "Home" : "Auth"}>
        <Stack.Screen
          name="Auth"
          options={{
            header: () => null,
            gestureEnabled: false,
          }}
          component={AuthScreen}
        />
        <Stack.Screen
          name="Users"
          options={{
            header: () => (
              <Header
                barStyle={"dark-content"}
                bgColor={global.colors.white}
                title="Фойдаланувчилар"
                role={response?.role}
                openDrawer={() => setDrawer(true)}
              />
            ),
            gestureEnabled: false,
          }}
          component={UsersScreen}
        />
        <Stack.Screen
          name="Objects"
          options={{
            header: () => (
              <Header
                barStyle={"dark-content"}
                bgColor={global.colors.white}
                title="Объектлар"
                role={response?.role}
                openDrawer={() => setDrawer(true)}
              />
            ),
            gestureEnabled: false,
          }}
          component={ObjectsScreen}
        />
      </Stack.Navigator>
      {drawer && <Drawer closeDrawer={() => setDrawer(false)} />}
    </NavigationContainer>
  );
};
export default AppContainer;
