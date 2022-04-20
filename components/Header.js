import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import CustomStatusBar from "./CustomStatusBar";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../redux/Actions/authActions";

const Header = ({ barStyle, bgColor, role, title }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [userMenu, setUserMenu] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate("Auth");
    setUserMenu(false);
  };
  return (
    <>
      <CustomStatusBar barStyle={barStyle} bgColor={bgColor} />
      <HeaderWrap>
        <BurgerWrap>
          <Burger>
            <View
              style={{
                width: 20,
                height: 3,
                backgroundColor: "#004787",
                borderRadius: 2,
              }}
            />
            <View
              style={{
                width: 12,
                height: 3,
                backgroundColor: "#004787",
                borderRadius: 2,
                marginTop: 5,
              }}
            />
            <View
              style={{
                width: 20,
                height: 3,
                backgroundColor: "#004787",
                borderRadius: 2,
                marginTop: 5,
              }}
            />
          </Burger>
          <BurgerTitle>{title}</BurgerTitle>
        </BurgerWrap>
        <UserInfoWrap onPress={() => setUserMenu(!userMenu)}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            }}
            style={{ width: 30, height: 30 }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: "#004787", fontSize: 16, fontWeight: "500" }}>
              Full Name
            </Text>
            <Text style={{ color: "#00C6FF", fontSize: 14, fontWeight: "400" }}>
              {role}
            </Text>
          </View>
        </UserInfoWrap>
        {userMenu && (
          <LogoutWrap>
            <Button onPress={() => handleLogout()}>
              <Text style={{ color: "#fff" }}>Чикиш</Text>
            </Button>
          </LogoutWrap>
        )}
      </HeaderWrap>
    </>
  );
};

export default Header;

const HeaderWrap = styled.View`
  width: 100%;
  height: 50px;
  background-color: #fff;
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

const BurgerTitle = styled.Text`
  color: #004787;
  font-weight: 500;
  font-size: 16px;
  margin-left: 15px;
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
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  elevation: 5;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #004787;
  padding: 10px;
  width: 160px;
  height: 40px;
  border-radius: 10px;
`;
