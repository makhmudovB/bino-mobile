import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import global from "../resourses/global";
import { Normal14 } from "../resourses/palettes";
import { useTranslation } from "react-i18next";

const SearchBlock = ({ value, onChange, onPress, clear }) => {
  const { t } = useTranslation();
  return (
    <InputWrap>
      <Input value={value} onChangeText={(e) => onChange(e)} />
      {value.length > 0 && (
        <TouchableOpacity onPress={clear}>
          <Image
            source={global.images.clear}
            style={{ width: 13, height: 13, marginRight: 5 }}
          />
        </TouchableOpacity>
      )}

      <Button onPress={onPress}>
        <Normal14 color={global.colors.white}>{t("search")}</Normal14>
      </Button>
    </InputWrap>
  );
};

export default SearchBlock;

const InputWrap = styled.View`
  width: 100%;
  height: 40px;
  margin-top: 15px;
  padding: 0 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${global.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  elevation: 5;
  border-radius: 16px;
`;

const Input = styled.TextInput`
  width: 70%;
  height: 40px;
  border: none;
  color: ${global.colors.main};
  font-weight: 600;
`;

const Button = styled.TouchableOpacity`
  width: 25%;
  height: 30px;
  background-color: ${global.colors.main};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;
