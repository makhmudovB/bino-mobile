import React, { useState } from "react";
import styled from "styled-components/native";
import { useSelector, useDispatch } from "react-redux";
import { createUser, updateUser } from "../redux/Actions/userActions";
import { refreshToken } from "../redux/Actions/authActions";
import global from "../resourses/global";
import { Normal14, Normal18, SemiBold20 } from "../resourses/palettes";
import { useTranslation } from "react-i18next";

const UserModal = ({ hideModal, updateData, orgData }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [updateLogin, setUpdateLogin] = useState(updateData?.login_name);

  const { access, token } = useSelector((state) => state.auth);

  const handleSend = () => {
    const body = {
      login_name: updateData ? updateLogin : login,
      password: password,
      organization: orgData ? orgData?.id : 10,
      role: 3,
    };
    if (updateData) {
      dispatch(updateUser(updateData?.id, body, access?.data?.access)),
        refreshToken({ refresh: token });
    } else {
      dispatch(createUser(body, access?.data?.access));
    }
    hideModal();
  };

  return (
    <ModalWrap>
      <ModalView>
        <SemiBold20 color={global.colors.main}>{t("createNewUser")}</SemiBold20>
        <InputWrap>
          <Normal18 color={global.colors.gray1} ml={15}>
            {t("login")}:
          </Normal18>
          <Input
            value={updateData ? updateLogin : login}
            onChangeText={(e) => {
              updateData ? setUpdateLogin(e) : setLogin(e);
            }}
          />
        </InputWrap>
        <InputWrap>
          <Normal18 color={global.colors.gray1} ml={15}>
            {t("password")}:
          </Normal18>
          <Input value={password} onChangeText={(e) => setPassword(e)} />
        </InputWrap>
        <BtnWrap>
          <Button onPress={hideModal} color={global.colors.red}>
            <Normal14 color={global.colors.white}>{t("cancel")}</Normal14>
          </Button>
          <Button
            onPress={() => handleSend()}
            disabled={!login && !password && !updateLogin ? true : false}
          >
            <Normal14 color={global.colors.white}>{t("save")}</Normal14>
          </Button>
        </BtnWrap>
      </ModalView>
    </ModalWrap>
  );
};

export default UserModal;

const ModalWrap = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${global.strings.height}px;
  background-color: rgba(0, 71, 135, 0.5);
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

const ModalView = styled.View`
  width: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
`;

const InputWrap = styled.View`
  margin-top: 30px;
`;

const Input = styled.TextInput`
  margin-top: 10px;
  width: 100%;
  height: 45px;
  background-color: ${global.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  elevation: 5;
  border-radius: 16px;
  padding-left: 15px;
  color: ${global.colors.main};
  font-size: 16px;
  font-weight: 500;
`;

const BtnWrap = styled.View`
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.TouchableOpacity`
  padding: 15px 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color = global.colors.main }) => color};
  border-radius: 15px;
  margin-left: 10px;
`;
