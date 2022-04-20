import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Loading = ({ color }) => {
  const loading = require("../assets/loading2.gif");
  return (
    <Wrapper color={color}>
      <Image source={loading} style={{ width: 100, height: 100 }} />
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ color = "#ffffff" }) => color};
`;
