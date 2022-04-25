import { Image } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import global from "../resourses/global";
import { Bold30, Normal14, SemiBold16 } from "../resourses/palettes";

const Error = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Image
        source={global.images.error}
        style={{ width: 300, height: 200 }}
        resizeMode="contain"
      />
      <Bold30 color={global.colors.main} mt={30}>
        Тақиқланган
      </Bold30>
      <SemiBold16 color={global.colors.gray1}>
        Сизда тизимга киришга ҳуқуқ ёқ
      </SemiBold16>
      <Button onPress={() => navigation.navigate("Auth")}>
        <Normal14 color={global.colors.white}>Ортга қайтиш</Normal14>
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
