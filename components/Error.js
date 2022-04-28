import { Image } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import global from "../resourses/global";
import { Bold30, Normal14, SemiBold16 } from "../resourses/palettes";
import { useTranslation } from "react-i18next";

const Error = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Image
        source={global.images.error}
        style={{ width: 300, height: 200 }}
        resizeMode="contain"
      />
      <Bold30 color={global.colors.main} mt={30}>
        {t("error")}
      </Bold30>
      <SemiBold16 color={global.colors.gray1}>{t("notEntry")}</SemiBold16>
      <Button onPress={() => navigation.navigate("Auth")}>
        <Normal14 color={global.colors.white}>{t("goBack")}</Normal14>
      </Button>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ color = global.colors.white }) => color};
`;

const Button = styled.TouchableOpacity`
  width: 200px;
  height: 45px;
  background-color: ${global.colors.main};
  margin-top: 20px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
