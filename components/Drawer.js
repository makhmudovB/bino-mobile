import { TouchableOpacity, Image } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import global from "../resourses/global";
import { SemiBold16 } from "../resourses/palettes";
import { useTranslation } from "react-i18next";

const Drawer = ({ closeDrawer }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handleNavigate = (route) => {
    navigation.navigate(route);
    closeDrawer();
  };

  const arr = [
    {
      id: 1,
      name: t("users"),
      route: "Users",
    },
    {
      id: 2,
      name: t("objects"),
      route: "Objects",
    },
    {
      id: 3,
      name: t("map"),
      route: "Map",
    },
    {
      id: 4,
      name: t("settings"),
      route: "Settings",
    },
  ];

  return (
    <DrawerWrap>
      <DrawerBlock>
        <CloseWrap>
          <TouchableOpacity onPress={closeDrawer}>
            <Image
              source={global.images.close}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </CloseWrap>
        {arr.map((el, key) => (
          <RowItem
            key={`${el.id}${key}`}
            onPress={() => handleNavigate(el.route)}
          >
            <SemiBold16 color={global.colors.main} ml={15}>
              {el.name}
            </SemiBold16>
          </RowItem>
        ))}
      </DrawerBlock>
    </DrawerWrap>
  );
};

export default Drawer;

const DrawerWrap = styled.View`
  position: absolute;
  top: ${Constants.statusBarHeight}px;
  left: 0;
  right: 0;
  bottom: 0;
  width: ${global.strings.width}px;
  height: ${global.strings.height}px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const DrawerBlock = styled.View`
  width: 80%;
  height: ${global.strings.height}px;
  background-color: ${global.colors.white};
`;

const CloseWrap = styled.View`
  width: 100%;
  height: 50px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const RowItem = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${global.colors.gray1};
`;
