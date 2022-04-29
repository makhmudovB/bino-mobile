import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";
import global from "../resourses/global";
import { Normal14 } from "../resourses/palettes";
import { useTranslation } from "react-i18next";
import { TextInputMask } from "react-native-masked-text";

const SearchBlock = ({ value, onChange, onPress, clear, mask = false }) => {
  const { t } = useTranslation();
  return (
    <InputWrap>
      {!mask ? (
        <Input value={value} onChangeText={(e) => onChange(e)} />
      ) : (
        <TextInputMask
          type="custom"
          options={{
            mask: "99:99:99:99:99:9999",
          }}
          placeholder="XX:XX:XX:XX:XX:XXXX"
          placeholderTextColor={global.colors.gray3}
          keyboardType={"numeric"}
          returnKeyType={"done"}
          value={value}
          color={global.colors.main}
          onChangeText={(e) => onChange(e)}
          maxLength={19}
          style={styles.inputMask}
        />
      )}
      {value.length > 0 && (
        <TouchableOpacity onPress={clear}>
          <Image
            source={global.images.clear}
            style={{ width: 15, height: 15, marginRight: 5 }}
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

const styles = StyleSheet.create({
  inputMask: {
    width: "70%",
    height: 40,
    color: global.colors.main,
    fontWeight: "600",
  },
});

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
