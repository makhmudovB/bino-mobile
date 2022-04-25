import { Modal, ScrollView } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components/native";
import RowItem from "../components/RowItem";
import UserModal from "../components/UserModal";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../redux/Actions/authActions";
import { getUsers } from "../redux/Actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import global from "../resourses/global";
import { Normal14 } from "../resourses/palettes";

const UsersScreen = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [chosen, setChosen] = useState(0);

  const { token, access, response } = useSelector((state) => state.auth);
  const { user, loading } = useSelector((state) => state.user);

  const params = {
    organization: "",
    search: searchValue,
    limit: 20,
    offset: 0,
  };

  const closeModal = () => {
    setModal(null);
  };

  const createUser = useCallback(() => {
    setModal("CREATE");
    setChosen(0);
  }, []);

  const editUser = useCallback(({ id }) => {
    setModal("UPDATE");
    setChosen(id);
  }, []);

  const chosenData = useMemo(() => {
    if (!chosen || !user) return null;
    return user?.results?.find((el) => el.id === chosen);
  }, [chosen, user]);

  const handleSearch = () => {
    dispatch(getUsers(params, access?.data?.access));
  };

  useEffect(() => {
    dispatch(getUsers(params, access?.data?.access));
  }, [access]);

  useEffect(() => {
    dispatch(refreshToken({ refresh: token }));
  }, [token]);

  if (loading) return <Loading />;
  if (!user || !token || !access || !response) return null;
  if (response?.role !== "admin") return <Error />;
  return (
    <UsersWrap>
      <CreateUser onPress={() => createUser()}>
        <Normal14 color={global.colors.main}>Фойдаланувчи яратиш</Normal14>
      </CreateUser>
      <InputWrap>
        <Input value={searchValue} onChangeText={(e) => setSearchValue(e)} />
        <Button onPress={() => handleSearch()}>
          <Normal14 color={global.colors.white}>Қидириш</Normal14>
        </Button>
      </InputWrap>
      <ScrollView showsVerticalScrollIndicator={false}>
        {user?.results?.map((el, i) => {
          return (
            <RowItem
              key={i + 1}
              name={el.login_name}
              number={i + 1}
              orgName={
                el.organization?.name_cyr ? el.organization?.name_cyr : "-"
              }
              onPress={() => editUser(el)}
            />
          );
        })}
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={Boolean(modal)}
        onRequestClose={() => closeModal()}
      >
        {modal === "CREATE" && <UserModal hideModal={() => closeModal()} />}
        {modal === "UPDATE" && (
          <UserModal hideModal={() => closeModal()} updateData={chosenData} />
        )}
      </Modal>
    </UsersWrap>
  );
};

export default UsersScreen;

const UsersWrap = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  background-color: ${global.colors.white};
`;

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
  width: 75%;
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

const CreateUser = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${global.colors.yellow};
  box-shadow: 0px 0px 10px rgba(255, 184, 0, 0.25);
  border-radius: 16px;
`;
