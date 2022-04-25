import { Image } from "react-native";
import React from "react";
import styled from "styled-components/native";
import global from "../resourses/global";

const Loading = ({ color }) => {
  return (
    <Wrapper color={color}>
      <Image
        source={global.images.loader}
        style={{ width: 100, height: 100 }}
      />
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ color = global.colors.white }) => color};
`;
