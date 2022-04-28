import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import CustomStatusBar from "./CustomStatusBar";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import global from "../resourses/global";
import { Normal14, SemiBold16 } from "../resourses/palettes";

const Header = ({
  barStyle,
  bgColor,
  role,
  title,
  openDrawer,
  enbleBack = false,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <CustomStatusBar barStyle={barStyle} bgColor={bgColor} />
      <HeaderWrap>
        {enbleBack ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={global.images.goBack}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        ) : (
          <BurgerWrap onPress={openDrawer}>
            <Burger>
              <View
                style={{
                  width: 20,
                  height: 3,
                  backgroundColor: global.colors.main,
                  borderRadius: 2,
                }}
              />
              <View
                style={{
                  width: 12,
                  height: 3,
                  backgroundColor: global.colors.main,
                  borderRadius: 2,
                  marginTop: 5,
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 3,
                  backgroundColor: global.colors.main,
                  borderRadius: 2,
                  marginTop: 5,
                }}
              />
            </Burger>
            <SemiBold16 color={global.colors.main} ml={15}>
              {title}
            </SemiBold16>
          </BurgerWrap>
        )}
        <UserInfoWrap>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            }}
            style={{ width: 30, height: 30 }}
          />
          <View style={{ marginLeft: 15 }}>
            <SemiBold16 color={global.colors.main}>Full Name</SemiBold16>
            <Normal14 color={global.colors.blue}>{role}</Normal14>
          </View>
        </UserInfoWrap>
      </HeaderWrap>
    </>
  );
};

export default Header;

const HeaderWrap = styled.View`
  width: ${global.strings.width}px;
  height: 50px;
  background-color: ${global.colors.white};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const BurgerWrap = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Burger = styled.View`
  width: 20px;
  height: 20px;
`;

const UserInfoWrap = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
