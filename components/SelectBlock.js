import { Image } from "react-native";
import React from "react";
import styled from "styled-components/native";
import global from "../resourses/global";
import { Normal14 } from "../resourses/palettes";

const SelectBlock = ({
  select,
  onPress,
  data,
  selectValue,
  handleSelect,
  close,
}) => {
  return (
    <>
      <Wrapper onPress={onPress}>
        <Normal14 color={global.colors.main}>{selectValue}</Normal14>
        <Image
          source={global.images.drop}
          width={20}
          height={20}
          style={{ transform: [{ rotate: `${select ? 180 : 0}deg` }] }}
        />
      </Wrapper>
      {select > 0 && (
        <SelectWrap>
          {data.length > 0 ? (
            data.map((el, i) => (
              <SelectItem
                key={i + 1}
                onPress={() => {
                  handleSelect(el);
                }}
              >
                <Normal14 color={global.colors.main}>{el.name_cyr}</Normal14>
              </SelectItem>
            ))
          ) : (
            <SelectItem onPress={close}>
              <Normal14 color={global.colors.main}>Мавжуд эмас!</Normal14>
            </SelectItem>
          )}
        </SelectWrap>
      )}
    </>
  );
};

export default SelectBlock;

const Wrapper = styled.TouchableOpacity`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background-color: ${global.colors.white};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  elevation: 5;
  position: relative;
`;

const SelectWrap = styled.ScrollView`
  position: absolute;
  top: 55px;
  width: 100%;
  min-height: 50px;
  max-height: 350px;
  background-color: ${global.colors.white};
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-width: 1px;
  border-color: ${global.colors.gray2};
  elevation: 5;
  z-index: 2;
`;

const SelectItem = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: ${global.colors.gray3};
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
`;
