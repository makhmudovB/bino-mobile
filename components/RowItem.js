import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import global from "../resourses/global";
import { Normal14, SemiBold14 } from "../resourses/palettes";

const RowItem = ({ number, name, orgName, onPress }) => {
  return (
    <Wrapper onPress={onPress}>
      <View style={{ flex: 4 }}>
        <SemiBold14 color={global.colors.main}>
          {number}. {name}
        </SemiBold14>
      </View>

      <View style={{ flex: 8 }}>
        <Normal14 color={global.colors.main} ml={20}>
          {orgName}
        </Normal14>
      </View>
    </Wrapper>
  );
};

export default RowItem;

const Wrapper = styled.TouchableOpacity`
  margin-top: 15px;
  width: 100%;
  height: 55px;
  background-color: ${global.colors.gray2};
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  border-radius: 15px;
`;
