import { Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import CustomStatusBar from "../components/CustomStatusBar";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../redux/Actions/authActions";
import Loading from "../components/Loading";

export const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { response, loading } = useSelector((state) => state.auth);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const routing = () => navigation.replace("Home");

  const handleSend = () => {
    const body = {
      login_name: login,
      password: password,
    };
    dispatch(
      getAuth(body, () => {
        if (response) {
          routing();
        }
      })
    );
  };
  if (loading) return <Loading color={"#004787"} />;
  return (
    <AuthWrap>
      <CustomStatusBar barStyle={"light-content"} bgColor="#1D3475" />
      <Title>Кириш</Title>
      <SubTitle>Давом эттириш учун, киринг</SubTitle>
      <Input
        placeholder="Логин"
        value={login}
        onChangeText={(e) => setLogin(e)}
      />
      <Input
        secureTextEntry={true}
        placeholder="Пароль"
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      <Button
        onPress={() => handleSend()}
        disabled={!login && !password ? true : false}
      >
        <Text>Кириш</Text>
      </Button>
    </AuthWrap>
  );
};

const AuthWrap = styled.View`
  background-color: #1d3475;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
`;

const Title = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
`;

const SubTitle = styled.Text`
  color: #b7b7b7;
  font-weight: 400;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 30px;
`;

const Input = styled.TextInput`
  background-color: #fff;
  width: 100%;
  height: 40px;
  border-radius: 15px;
  margin-top: 30px;
  color: #9e9e9e;
  font-size: 16px;
  font-weight: 500;
  padding-left: 15px;
`;

const Button = styled.TouchableOpacity`
  margin-top: 25px;
  background-color: #ffb800;
  border-radius: 12px;
  width: 50%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
