import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Normal14, SemiBold16 } from "../resourses/palettes";
import global from "../resourses/global";
import { useTranslation } from "react-i18next";

const GridItem = ({
  num,
  orgName,
  year,
  count,
  objCount,
  created,
  edited,
  disabled,
  onPress,
  openCreatedModal,
  openEditedModal,
}) => {
  const { t } = useTranslation();
  return (
    <GridBlock disabled={disabled}>
      <TouchableOpacity onPress={onPress}>
        <Normal14 color={global.colors.gray1}>{t("cadNum")}:</Normal14>
        <SemiBold16 color={global.colors.main} mt={5}>
          {num}
        </SemiBold16>
        <Normal14 color={global.colors.gray1} mt={10}>
          {t("orgName")}:
        </Normal14>
        <SemiBold16 color={global.colors.main} mt={5}>
          {orgName}
        </SemiBold16>
        <Normal14 color={global.colors.gray1} mt={10}>
          {t("buildYear")}:
        </Normal14>
        <SemiBold16 color={global.colors.main} mt={5}>
          {year}
        </SemiBold16>
        <Normal14 color={global.colors.gray1} mt={10}>
          {t("addedBuildCount")}:
        </Normal14>
        <SemiBold16 color={global.colors.main} mt={5}>
          {count}
        </SemiBold16>
        <Normal14 color={global.colors.gray1} mt={10}>
          {t("buildCount")}:
        </Normal14>
        <SemiBold16 color={global.colors.main} mt={5}>
          {objCount}
        </SemiBold16>
      </TouchableOpacity>
      <TouchableOpacity onPress={openCreatedModal}>
        <Normal14 color={global.colors.gray1} mt={10}>
          {t("created")}:
        </Normal14>
        <SemiBold16 color={global.colors.main} mt={5}>
          {created}
        </SemiBold16>
      </TouchableOpacity>
      <TouchableOpacity onPress={openEditedModal}>
        <Normal14 color={global.colors.gray1} mt={10}>
          {t("edited")}:
        </Normal14>
        <SemiBold16 color={global.colors.main} mt={5}>
          {edited}
        </SemiBold16>
      </TouchableOpacity>
    </GridBlock>
  );
};

export default GridItem;

const GridBlock = styled.View`
  width: 49%;
  margin-top: 10px;
  min-height: 250px;
  background-color: ${global.colors.gray2};
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border-radius: 15px;
`;
