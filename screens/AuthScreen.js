import React, { useState } from "react";
import styled from "styled-components/native";
import CustomStatusBar from "../components/CustomStatusBar";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../redux/Actions/authActions";
import Loading from "../components/Loading";
import global from "../resourses/global";
import { Bold40, Normal14, Normal18 } from "../resourses/palettes";
import { useTranslation } from "react-i18next";

export const AuthScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { response, loading } = useSelector((state) => state.auth);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const routing = () => navigation.replace("Users");

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
  if (loading) return <Loading color={global.colors.main} />;
  return (
    <AuthWrap>
      <CustomStatusBar
        barStyle={"light-content"}
        bgColor={global.colors.main2}
      />
      <Bold40 color={global.colors.white}>{t("enter")}</Bold40>
      <Normal18 color={global.colors.gray3} mt={15} mb={30}>
        {t("continueEnter")}
      </Normal18>
      <Input
        placeholder={t("login")}
        value={login}
        onChangeText={(e) => setLogin(e)}
      />
      <Input
        secureTextEntry={true}
        placeholder={t("password")}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      <Button
        onPress={() => handleSend()}
        disabled={!login && !password ? true : false}
      >
        <Normal14 color={global.colors.main}>{t("enter")}</Normal14>
      </Button>
    </AuthWrap>
  );
};

const AuthWrap = styled.View`
  background-color: ${global.colors.main2};
  height: ${global.strings.height}px;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
`;

const Input = styled.TextInput`
  background-color: ${global.colors.white};
  width: 100%;
  height: 40px;
  border-radius: 15px;
  margin-top: 30px;
  color: ${global.colors.gray4};
  font-size: 16px;
  font-weight: 500;
  padding-left: 15px;
`;

const Button = styled.TouchableOpacity`
  margin-top: 25px;
  background-color: ${global.colors.yellow};
  border-radius: 12px;
  width: 50%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
