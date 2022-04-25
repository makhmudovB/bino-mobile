import React from "react";
import styled from "styled-components/native";
import { Normal14, SemiBold16 } from "../resourses/palettes";
import global from "../resourses/global";

const GridItem = ({
  num,
  orgName,
  year,
  count,
  objCount,
  created,
  edited,
  disabled,
}) => {
  return (
    <GridBlock disabled={disabled}>
      <Normal14 color={global.colors.gray1}>Кадастр рақами:</Normal14>
      <SemiBold16 color={global.colors.main} mt={5}>
        {num}
      </SemiBold16>
      <Normal14 color={global.colors.gray1} mt={10}>
        Ташкилот номи:
      </Normal14>
      <SemiBold16 color={global.colors.main} mt={5}>
        {orgName}
      </SemiBold16>
      <Normal14 color={global.colors.gray1} mt={10}>
        Қурилиш йили:
      </Normal14>
      <SemiBold16 color={global.colors.main} mt={5}>
        {year}
      </SemiBold16>
      <Normal14 color={global.colors.gray1} mt={10}>
        Қўшилган бинолар сони:
      </Normal14>
      <SemiBold16 color={global.colors.main} mt={5}>
        {count}
      </SemiBold16>
      <Normal14 color={global.colors.gray1} mt={10}>
        Бинолар сони:
      </Normal14>
      <SemiBold16 color={global.colors.main} mt={5}>
        {objCount}
      </SemiBold16>
      <Normal14 color={global.colors.gray1} mt={10}>
        Қўшди:
      </Normal14>
      <SemiBold16 color={global.colors.main} mt={5}>
        {created}
      </SemiBold16>
      <Normal14 color={global.colors.gray1} mt={10}>
        Ўзгартирди:
      </Normal14>
      <SemiBold16 color={global.colors.main} mt={5}>
        {edited}
      </SemiBold16>
    </GridBlock>
  );
};

export default GridItem;

const GridBlock = styled.TouchableOpacity`
  width: 49%;
  margin-top: 10px;
  min-height: 250px;
  background-color: ${global.colors.gray2};
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border-radius: 15px;
`;
