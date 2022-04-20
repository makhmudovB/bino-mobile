import { Image, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Error = () => {
  const navigation = useNavigation();
  const error = require("../assets/error.png");
  return (
    <Wrapper>
      <Image
        source={error}
        style={{ width: 300, height: 200 }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "600",
          color: "#004787",
          marginTop: 30,
        }}
      >
        Тақиқланган
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#929292",
          marginTop: 20,
        }}
      >
        Сизда тизимга киришга ҳуқуқ ёқ
      </Text>
      <Button onPress={() => navigation.navigate("Auth")}>
        <Text style={{ color: "#fff" }}>Ортга қайтиш</Text>
      </Button>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ color = "#ffffff" }) => color};
`;

const Button = styled.TouchableOpacity`
  width: 200px;
  height: 45px;
  background-color: #004787;
  margin-top: 20px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
