import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import global from "../resourses/global";
import { Bold30, Normal14 } from "../resourses/palettes";
import { useTranslation } from "react-i18next";
import SeachBlock from "../components/SearchBlock";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrganizationById,
  getOrganizations,
  searchOrganizations,
} from "../redux/Actions/organizationAction";
import { refreshToken } from "../redux/Actions/authActions";
import Loading from "../components/Loading";
import OrganizationItem from "../components/OrganizationItem";
import UserModal from "../components/UserModal";
import { useNavigation } from "@react-navigation/native";

const OrganizationsScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [active, setActive] = useState(organizations?.results[0]?.id);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [chosen, setChosen] = useState(0);

  const { organizations, organizationById, searchResult, orgLoading } =
    useSelector((state) => state.organizations);
  const { access, token } = useSelector((state) => state.auth);

  const params = {
    limit: 15,
    level: 1,
  };

  const searchParams = {
    limit: 15,
    offset: 0,
    ordering: 0,
    search: search,
  };

  const chosenData = useMemo(() => {
    if (!chosen || !organizationById) return null;
    return organizationById?.children?.find((el) => el.id === chosen);
  }, [chosen, organizationById]);

  const openModal = (el) => {
    setModal(true);
    setChosen(el.id);
  };

  const closeModal = () => setModal(false);

  const handleActive = useCallback(
    (el) => {
      setActive(el.id);
      setSearch("");
      dispatch(getOrganizationById(el.id, access?.data?.access));
    },
    [access]
  );

  const handleSearch = () => {
    dispatch(searchOrganizations(searchParams, access?.data?.access));
  };

  useEffect(() => {
    dispatch(getOrganizations(params, access?.data?.access));
  }, [access]);

  useEffect(() => {
    dispatch(refreshToken({ refresh: token }));
  }, [token]);

  if (orgLoading) return <Loading />;

  return (
    <Wrapper showsVerticalScrollIndicator={false}>
      <Bold30 color={global.colors.main}>{t("orgList")}</Bold30>
      <SeachBlock
        value={search}
        onChange={setSearch}
        clear={() => setSearch("")}
        onPress={handleSearch}
      />
      <ListWrap>
        {organizations?.results?.map((el, i) => (
          <ListItem
            key={i + 1}
            borderColor={
              active === el.id ? global.colors.white : global.colors.gray3
            }
            bgColor={
              active === el.id ? global.colors.main : global.colors.gray2
            }
            onPress={() => handleActive(el)}
          >
            <Normal14
              color={
                active === el.id ? global.colors.white : global.colors.main
              }
            >
              {el.name_cyr}
            </Normal14>
          </ListItem>
        ))}
      </ListWrap>
      <GridWrap>
        {search.length > 0
          ? searchResult?.results?.map((el, i) => {
              const { id } = el;
              return (
                <OrganizationItem
                  key={i + 1}
                  orgName={el.name_cyr}
                  objCount={el.generalinformation_num}
                  orgCount={el.children_num}
                  onPress={() => navigation.navigate("Objects", { id })}
                />
              );
            })
          : organizationById?.children?.map((el, i) => {
              const { id } = el;
              return (
                <OrganizationItem
                  key={i + 1}
                  orgName={el.name_cyr}
                  objCount={el.generalinformation_num}
                  orgCount={el.children_num}
                  onPress={() => navigation.navigate("Objects", { id })}
                />
              );
            })}
      </GridWrap>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => closeModal()}
      >
        {modal && (
          <UserModal hideModal={() => closeModal()} orgData={chosenData} />
        )}
      </Modal>
    </Wrapper>
  );
};

export default OrganizationsScreen;

const Wrapper = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: ${global.colors.white};
  padding: 10px;
`;

const ListWrap = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ListItem = styled.TouchableOpacity`
  padding: 5px;
  border-width: 1px;
  border-color: ${({ borderColor = global.colors.gray3 }) => borderColor};
  background-color: ${({ bgColor = global.colors.gray2 }) => bgColor};
  border-radius: 5px;
  margin-top: 10px;
  margin-right: 5px;
`;

const GridWrap = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: -1;
`;
