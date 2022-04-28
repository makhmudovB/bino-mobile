import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import { getObjectsById } from "../redux/Actions/objectsActions";
import ObjectInfo from "../components/ObjectInfo";
import styled from "styled-components/native";
import global from "../resourses/global";
import * as Linking from "expo-linking";
import { useTranslation } from "react-i18next";

const ShowObjectScreen = ({ route }) => {
  const id = route.params.id;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { access } = useSelector((state) => state.auth);
  const { objectById, objLoading } = useSelector((state) => state.objects);

  useEffect(() => {
    dispatch(getObjectsById(id, access?.data?.access));
  }, []);

  if (!objectById) return null;
  if (objLoading) return <Loading />;

  return (
    <Wrapper showsVerticalScrollIndicator={false}>
      <ObjectInfo label={t("objCadNum")} info={objectById.cadastral_number} />
      <ObjectInfo label={t("objRegion")} info={objectById.region} />
      <ObjectInfo label={t("objDistrict")} info={objectById.district} />
      <ObjectInfo label={t("objNeighborhood")} info={objectById.neighborhood} />
      <ObjectInfo label={t("objStreet")} info={objectById.address} />
      <ObjectInfo
        label={t("objBuildYear")}
        info={objectById.year_construction}
      />
      <ObjectInfo
        label={t("objDatePassport")}
        info={objectById.date_of_passport}
      />
      <ObjectInfo
        label={t("objHistorical")}
        info={objectById.historical_status ? t("have") : t("notHave")}
      />
      <ObjectInfo
        label={t("objBuildCount")}
        info={objectById.number_buildings}
      />
      <ObjectInfo
        label={t("phoneNumber")}
        info={objectById.phone}
        onPress={() => Linking.openURL(`tel:${objectById.phone}`)}
      />
    </Wrapper>
  );
};

export default ShowObjectScreen;

const Wrapper = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: ${global.colors.white};
  padding: 10px;
  padding-bottom: 20px;
`;
