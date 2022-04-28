import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import global from "../resourses/global";
import { Normal14, SemiBold14, SemiBold20 } from "../resourses/palettes";
import * as Linking from "expo-linking";
import { useTranslation } from "react-i18next";

const InfoModal = ({
  hideModal,
  lastName,
  name,
  midName,
  phone,
  email,
  orgName,
}) => {
  const { t } = useTranslation();
  return (
    <ModalWrap>
      <ModalView>
        <SemiBold20 color={global.colors.main} mb={10}>
          {t("userInfo")}:
        </SemiBold20>
        <RowBetween>
          <Block>
            <SemiBold14 color={global.colors.main}>{t("name")}:</SemiBold14>
          </Block>
          <Block>
            <Normal14 color={global.colors.main}>{name}</Normal14>
          </Block>
        </RowBetween>

        <RowBetween>
          <Block>
            <SemiBold14 color={global.colors.main}>{t("lastName")}:</SemiBold14>
          </Block>
          <Block>
            <Normal14 color={global.colors.main}>{lastName}</Normal14>
          </Block>
        </RowBetween>

        <RowBetween>
          <Block>
            <SemiBold14 color={global.colors.main}>{t("midName")}:</SemiBold14>
          </Block>
          <Block>
            <Normal14 color={global.colors.main}>{midName}</Normal14>
          </Block>
        </RowBetween>

        <RowBetween>
          <Block>
            <SemiBold14 color={global.colors.main}>
              {t("phoneNumber")}:
            </SemiBold14>
          </Block>
          <Block>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)}>
              <Normal14 color={global.colors.main} textDecor="underline">
                {phone}
              </Normal14>
            </TouchableOpacity>
          </Block>
        </RowBetween>

        <RowBetween>
          <Block>
            <SemiBold14 color={global.colors.main}>{t("email")}:</SemiBold14>
          </Block>
          <Block>
            <Normal14 color={global.colors.main}>{email}</Normal14>
          </Block>
        </RowBetween>

        <RowBetween>
          <Block>
            <SemiBold14 color={global.colors.main}>{t("orgName")}:</SemiBold14>
          </Block>
          <Block>
            <Normal14 color={global.colors.main}>{orgName}</Normal14>
          </Block>
        </RowBetween>
        <Button onPress={hideModal} color={global.colors.red}>
          <Normal14 color={global.colors.white}>{t("close")}</Normal14>
        </Button>
      </ModalView>
    </ModalWrap>
  );
};

export default InfoModal;

const ModalWrap = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${global.strings.height}px;
  background-color: rgba(0, 71, 135, 0.5);
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

const ModalView = styled.View`
  width: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
`;

const Button = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 15px 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color = global.colors.main }) => color};
  border-radius: 15px;
  margin-left: 10px;
`;

const RowBetween = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const Block = styled.View`
  flex: 1;
`;
