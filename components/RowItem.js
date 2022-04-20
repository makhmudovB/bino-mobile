import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const RowItem = ({ number, name, orgName, onPress }) => {
  return (
    <Wrapper onPress={onPress}>
      <View style={{ flex: 4 }}>
        <Text style={{ color: "#004787", fontWeight: "600" }}>
          {number}. {name}
        </Text>
      </View>

      <View style={{ flex: 8 }}>
        <Text style={{ marginLeft: 20, color: "#004787" }}>{orgName}</Text>
      </View>
    </Wrapper>
  );
};

export default RowItem;

const Wrapper = styled.TouchableOpacity`
  margin-top: 15px;
  width: 100%;
  height: 55px;
  background-color: #f4f4f4;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  border-radius: 15px;
`;
