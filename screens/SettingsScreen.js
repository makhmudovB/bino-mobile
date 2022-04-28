import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import global from "../resourses/global";
import { SemiBold14, SemiBold16 } from "../resourses/palettes";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "../redux/Actions/languageAction";
import { logout } from "../redux/Actions/authActions";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { language } = useSelector((state) => state.language);
  const { token, access, response } = useSelector((state) => state.auth);

  const changeLang = (lng) => {
    if (lng != language) {
      dispatch(switchLanguage(lng));
      i18n.changeLanguage(lng);
    }
  };

  const handleLogout = () => {
    dispatch(logout({ refresh: response?.refresh }, token));
    navigation.navigate("Auth");
  };

  return (
    <Wrapper>
      <View>
        <SemiBold14 color={global.colors.main}>{t("lang")}:</SemiBold14>
        <LangWrap>
          <LangButtons
            style={{
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderRightWidth: 1,
              borderRightColor: global.colors.gray1,
            }}
            color={language != "cyr" ? global.colors.white : global.colors.main}
            onPress={() => changeLang("cyr")}
          >
            <SemiBold16
              color={
                language != "cyr" ? global.colors.main : global.colors.white
              }
            >
              ЎЗБЕКЧА
            </SemiBold16>
          </LangButtons>
          <LangButtons
            onPress={() => changeLang("uz")}
            color={language != "uz" ? global.colors.white : global.colors.main}
          >
            <SemiBold16
              color={
                language != "uz" ? global.colors.main : global.colors.white
              }
            >
              O'ZBEKCHA
            </SemiBold16>
          </LangButtons>
          <LangButtons
            style={{
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              borderLeftWidth: 1,
              borderLeftColor: global.colors.gray1,
            }}
            color={language != "ru" ? global.colors.white : global.colors.main}
            onPress={() => changeLang("ru")}
          >
            <SemiBold16
              color={
                language != "ru" ? global.colors.main : global.colors.white
              }
            >
              РУССКИЙ
            </SemiBold16>
          </LangButtons>
        </LangWrap>
      </View>

      <LogoutBtn onPress={() => handleLogout()}>
        <SemiBold14>{t("logout")}</SemiBold14>
      </LogoutBtn>
    </Wrapper>
  );
};

export default SettingsScreen;

const Wrapper = styled.View`
  flex: 1;
  padding: 10px 10px 20px 10px;
  justify-content: space-between;
  background-color: ${global.colors.white};
`;

const LangWrap = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  background-color: ${global.colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
`;

const LangButtons = styled.TouchableOpacity`
  width: 33%;
  justify-content: center;
  align-items: center;
  background-color: ${({ color = global.colors.blue }) => color};
  elevation: 5;
`;

const LogoutBtn = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${global.colors.red};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
