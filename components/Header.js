import { View, Image } from "react-native";
import React, { useState } from "react";
import CustomStatusBar from "./CustomStatusBar";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/Actions/authActions";
import { useNavigation } from "@react-navigation/native";
import global from "../resourses/global";
import { Normal14, SemiBold16 } from "../resourses/palettes";

const Header = ({ barStyle, bgColor, role, title, openDrawer }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [userMenu, setUserMenu] = useState(false);

  const { token, access, response } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout({ refresh: response?.refresh }, token));
    navigation.navigate("Auth");
    setUserMenu(false);
  };
  return (
    <>
      <CustomStatusBar barStyle={barStyle} bgColor={bgColor} />
      <HeaderWrap>
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
        <UserInfoWrap onPress={() => setUserMenu(!userMenu)}>
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
        {userMenu && (
          <LogoutWrap>
            <Button onPress={() => handleLogout()}>
              <Normal14 color={global.colors.white}>Чикиш</Normal14>
            </Button>
          </LogoutWrap>
        )}
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

const UserInfoWrap = styled.TouchableOpacity`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const LogoutWrap = styled.View`
  position: absolute;
  top: 40px;
  right: 10px;
  background-color: ${global.colors.white};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  elevation: 5;
  z-index: 10;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${global.colors.main};
  padding: 10px;
  width: 160px;
  height: 40px;
  border-radius: 10px;
  z-index: 10;
`;
