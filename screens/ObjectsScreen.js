import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import global from "../resourses/global";
import SelectBlock from "../components/SelectBlock";
import GridItem from "../components/GridItem";
import { useDispatch, useSelector } from "react-redux";
import {
  getObjects,
  getObjectsByOrganizations,
} from "../redux/Actions/objectsActions";
import Loading from "../components/Loading";
import { getRegions } from "../redux/Actions/regionsActions";
import SearchBlock from "../components/SearchBlock";
import { useNavigation } from "@react-navigation/native";
import InfoModal from "../components/InfoModal";
import { refreshToken } from "../redux/Actions/authActions";

// const arr = [
//   {
//     id: 1703,
//     name_cyr: "Андижон вилояти",
//   },
//   {
//     id: 1706,
//     name_cyr: "Бухоро вилояти",
//   },
//   {
//     id: 1708,
//     name_cyr: "Жиззах вилояти",
//   },
//   {
//     id: 1710,
//     name_cyr: "Қашқадарё вилояти",
//   },
//   {
//     id: 1712,
//     name_cyr: "Навоий вилояти",
//   },
//   {
//     id: 1714,
//     name_cyr: "Наманган вилояти",
//   },
//   {
//     id: 1718,
//     name_cyr: "Самарқанд вилояти",
//   },
//   {
//     id: 1722,
//     name_cyr: "Сурхондарё вилояти",
//   },
//   {
//     id: 1724,
//     name_cyr: "Сирдарё вилояти",
//   },
//   {
//     id: 1726,
//     name_cyr: "Тошкент шаҳри",
//   },
//   {
//     id: 1727,
//     name_cyr: "Тошкент вилояти",
//   },
//   {
//     id: 1730,
//     name_cyr: "Фарғона вилояти",
//   },
//   {
//     id: 1733,
//     name_cyr: "Хоразм вилояти",
//   },
//   {
//     id: 1735,
//     name_cyr: "Қорақалпоғистон Республикаси",
//   },
// ];

const ObjectsScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // const [select, setSelect] = useState(false);
  // const [selectValue, setSelectValue] = useState("Вилоят");
  // const [regionId, setRegionId] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [modal, setModal] = useState(null);
  const [chosen, setChosen] = useState(0);

  const { access, token } = useSelector((state) => state.auth);
  const { objects, objectsByOrg, objLoading } = useSelector(
    (state) => state.objects
  );
  // const { regions, regionLoading } = useSelector((state) => state.regions);

  const params = {
    region__shared_id: "",
    district: "",
    search: searchValue,
    limit: 10,
    offset: 0,
  };

  // const handleSelect = (el) => {
  //   dispatch(getRegions(regionId, access?.data?.access));
  //   dispatch(getObjects(params, access?.data?.access));
  //   setSelectValue(el.name_cyr);
  //   setRegionId(el.id);
  //   setSelect(false);
  // };

  const handleSearch = () => {
    dispatch(getObjects(params, access?.data?.access));
  };

  const createdInfo = useCallback(({ id }) => {
    setModal("CREATED");
    setChosen(id);
  }, []);

  const editedInfo = useCallback(({ id }) => {
    setModal("EDITED");
    setChosen(id);
  }, []);

  const chosenData = useMemo(() => {
    if (!chosen || !objects) return null;
    return objects?.find((el) => el.id === chosen);
  }, [chosen, objects]);

  const closeModal = () => setModal(null);

  useEffect(() => {
    dispatch(getObjects(params, access?.data?.access));
  }, [access]);

  const objParams = {
    organization: route?.params?.id,
    limit: 10,
  };

  useEffect(() => {
    dispatch(getObjectsByOrganizations(objParams, access?.data?.access));
  }, [access]);

  useEffect(() => {
    dispatch(refreshToken({ refresh: token }));
  }, [token]);

  if (!objects) return null;
  if (objLoading) return <Loading />;

  return (
    <ObjectsWrap
      // scrollEnabled={select ? false : true}
      showsVerticalScrollIndicator={false}
    >
      {/* <SelectBlock
        select={select}
        selectValue={selectValue}
        onPress={() => setSelect(!select)}
        handleSelect={handleSelect}
        data={arr}
      /> */}
      <SearchBlock
        mask={true}
        value={searchValue}
        onChange={setSearchValue}
        onPress={() => handleSearch()}
        clear={() => setSearchValue("")}
      />
      <GridWrap>
        {objectsByOrg
          ? objectsByOrg?.results?.map((el, i) => {
              const created =
                el.created_by?.profile?.name && el.created_by?.profile?.surname;
              const updated =
                el.updated_by?.profile?.name && el.updated_by?.profile?.surname;
              const { id } = el;
              return (
                <GridItem
                  key={i + 1}
                  onPress={() => navigation.navigate("ShowObject", { id })}
                  // disabled={select ? true : false}
                  num={el.cadastral_number}
                  orgName={el.organization?.name_cyr}
                  year={el.year_construction}
                  count={el.building_count}
                  objCount={el.number_buildings}
                  created={
                    created
                      ? `${el.created_by?.profile?.name} ${el.created_by?.profile?.surname}`
                      : "-"
                  }
                  edited={
                    updated
                      ? `${el.updated_by?.profile?.name} ${el.updated_by?.profile?.surname}`
                      : "-"
                  }
                  openCreatedModal={created ? () => createdInfo(el) : null}
                  openEditedModal={updated ? () => editedInfo(el) : null}
                />
              );
            })
          : objects.map((el, i) => {
              const created =
                el.created_by?.profile?.name && el.created_by?.profile?.surname;
              const updated =
                el.updated_by?.profile?.name && el.updated_by?.profile?.surname;
              const { id } = el;
              return (
                <GridItem
                  key={i + 1}
                  onPress={() => navigation.navigate("ShowObject", { id })}
                  // disabled={select ? true : false}
                  num={el.cadastral_number}
                  orgName={el.organization?.name_cyr}
                  year={el.year_construction}
                  count={el.building_count}
                  objCount={el.number_buildings}
                  created={
                    created
                      ? `${el.created_by?.profile?.name} ${el.created_by?.profile?.surname}`
                      : "-"
                  }
                  edited={
                    updated
                      ? `${el.updated_by?.profile?.name} ${el.updated_by?.profile?.surname}`
                      : "-"
                  }
                  openCreatedModal={created ? () => createdInfo(el) : null}
                  openEditedModal={updated ? () => editedInfo(el) : null}
                />
              );
            })}
      </GridWrap>
      <Modal
        animationType="fade"
        transparent={true}
        visible={Boolean(modal)}
        onRequestClose={() => closeModal()}
      >
        {modal === "CREATED" && (
          <InfoModal
            name={chosenData?.created_by?.profile?.name}
            lastName={chosenData?.created_by?.profile?.surname}
            midName={chosenData?.created_by?.profile?.middlename}
            phone={chosenData?.created_by?.profile?.phone_number}
            email={chosenData?.created_by?.profile?.email}
            orgName={chosenData?.created_by?.organization?.name_cyr}
            hideModal={() => closeModal()}
          />
        )}
        {modal === "EDITED" && (
          <InfoModal
            name={chosenData?.updated_by?.profile?.name}
            lastName={chosenData?.updated_by?.profile?.surname}
            midName={chosenData?.updated_by?.profile?.middlename}
            phone={chosenData?.updated_by?.profile?.phone_number}
            email={chosenData?.updated_by?.profile?.email}
            orgName={chosenData?.updated_by?.organization?.name_cyr}
            hideModal={() => closeModal()}
          />
        )}
      </Modal>
    </ObjectsWrap>
  );
};

export default ObjectsScreen;

const ObjectsWrap = styled.ScrollView`
  width: 100%;
  min-height: 100%;
  padding: 10px;
  background-color: ${global.colors.white};
`;

const GridWrap = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: -1;
`;
