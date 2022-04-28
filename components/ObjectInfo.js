import React from "react";
import styled from "styled-components/native";
import global from "../resourses/global";
import { SemiBold16, Normal18 } from "../resourses/palettes";

const ObjectInfo = ({ label, info, onPress }) => {
  return (
    <Wrapper>
      <Normal18 color={global.colors.dark} ml={10}>
        {label}:
      </Normal18>
      <Row onPress={onPress}>
        <SemiBold16 color={global.colors.main}>{info}</SemiBold16>
      </Row>
    </Wrapper>
  );
};

export default ObjectInfo;

const Wrapper = styled.View`
  margin-bottom: 15px;
`;

const Row = styled.TouchableOpacity`
  margin-top: 5px;
  width: 100%;
  min-height: 55px;
  background-color: ${global.colors.gray2};
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  border-radius: 15px;
`;
