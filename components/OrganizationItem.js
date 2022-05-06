import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Normal14, SemiBold16 } from "../resourses/palettes";
import global from "../resourses/global";
import { useTranslation } from "react-i18next";

const OrganizationItem = ({ orgName, objCount, orgCount, onPress }) => {
  const { t } = useTranslation();
  return (
    <GridBlock onPress={onPress}>
      <Normal14 color={global.colors.gray1}>{t("orgName")}:</Normal14>
      <SemiBold16 color={global.colors.main} mt={5}>
        {orgName}
      </SemiBold16>
      <Normal14 color={global.colors.gray1} mt={10}>
        {t("objCount")}:
      </Normal14>
      <SemiBold16 color={global.colors.main} mt={5}>
        {objCount}
      </SemiBold16>
      <Normal14 color={global.colors.gray1} mt={10}>
        {t("orgCount")}:
      </Normal14>
      <SemiBold16 color={global.colors.main} mt={5}>
        {orgCount}
      </SemiBold16>
    </GridBlock>
  );
};

export default OrganizationItem;

const GridBlock = styled.TouchableOpacity`
  width: 49%;
  margin-top: 10px;
  min-height: 200px;
  background-color: ${global.colors.gray2};
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  border-radius: 15px;
`;
