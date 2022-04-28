import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "./screens/AuthScreen";
import UsersScreen from "./screens/UsersScreen";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import ObjectsScreen from "./screens/ObjectsScreen";
import ShowObjectScreen from "./screens/ShowObjectScreen";
import Drawer from "./components/Drawer";
import global from "./resourses/global";
import MapScreen from "./screens/MapScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { useTranslation } from "react-i18next";

const Stack = createStackNavigator();
const AppContainer = () => {
  const { t } = useTranslation();

  const [drawer, setDrawer] = useState(false);

  const { response, token } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={!!token ? "Users" : "Auth"}>
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
                title={t("users")}
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
                title={t("objects")}
                role={response?.role}
                openDrawer={() => setDrawer(true)}
              />
            ),
            gestureEnabled: false,
          }}
          component={ObjectsScreen}
        />
        <Stack.Screen
          name="ShowObject"
          options={{
            header: () => (
              <Header
                barStyle={"dark-content"}
                bgColor={global.colors.white}
                role={response?.role}
                enbleBack={true}
              />
            ),
          }}
          component={ShowObjectScreen}
        />
        <Stack.Screen
          name="Map"
          options={{
            header: () => null,
          }}
          component={MapScreen}
        />
        <Stack.Screen
          name="Settings"
          options={{
            header: () => (
              <Header
                barStyle={"dark-content"}
                bgColor={global.colors.white}
                role={response?.role}
                enbleBack={true}
              />
            ),
          }}
          component={SettingsScreen}
        />
      </Stack.Navigator>
      {drawer && <Drawer closeDrawer={() => setDrawer(false)} />}
    </NavigationContainer>
  );
};
export default AppContainer;
