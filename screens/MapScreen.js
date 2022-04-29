import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Image, TouchableOpacity, Clipboard } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import global from "../resourses/global";
import { useDispatch, useSelector } from "react-redux";
import { getObjects } from "../redux/Actions/objectsActions";
import Loading from "../components/Loading";
import { Normal14, Normal18, SemiBold16 } from "../resourses/palettes";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import * as Linking from "expo-linking";

const MapScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [chosen, setChosen] = useState(0);
  const [info, setInfo] = useState(false);
  const [copied, setCopied] = useState(false);

  const { objects, objLoading } = useSelector((state) => state.objects);
  const { access } = useSelector((state) => state.auth);

  const params = {
    region__shared_id: "",
    district: "",
    search: "",
    limit: 40,
    offset: 0,
  };

  const openInfo = useCallback(({ id }) => {
    setInfo(true);
    setChosen(id);
  }, []);

  const closeInfo = () => {
    setChosen(0);
    setInfo(false);
  };

  const handleCopy = () => {
    Clipboard.setString(chosenData?.cadastral_number);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const chosenData = useMemo(() => {
    if (!chosen || !objects) return null;
    return objects?.find((el) => el.id === chosen);
  }, [chosen, objects]);
  const id = chosenData?.id;

  useEffect(() => {
    dispatch(getObjects(params, access?.data?.access));
  }, [access]);

  if (!objects) return null;
  if (objLoading) return <Loading />;

  return (
    <MapWrapp>
      <GoBack onPress={() => navigation.goBack()}>
        <Image source={global.images.goBack} />
      </GoBack>
      <MapView
        style={{ width: global.strings.width, height: global.strings.height }}
        initialRegion={{
          latitude: 41,
          longitude: 69,
          latitudeDelta: 20,
          longitudeDelta: 20,
        }}
      >
        {objects?.map((el, i) => (
          <Marker
            key={i + 1}
            coordinate={{
              latitude: el.geolocation[0],
              longitude: el.geolocation[1],
            }}
            onPress={() => openInfo(el)}
          >
            <Image source={global.images.pin} />
          </Marker>
        ))}
      </MapView>
      {info && (
        <InfoWrap>
          <CloseBtn onPress={() => closeInfo()}>
            <Image
              source={global.images.close}
              style={{ width: 20, height: 20 }}
            />
          </CloseBtn>
          <Normal14 color={global.colors.gray1}>{t("cadNum")}:</Normal14>
          <TouchableOpacity onLongPress={() => handleCopy()}>
            <Normal18 color={global.colors.main} mt={5}>
              {chosenData?.cadastral_number}
            </Normal18>
          </TouchableOpacity>
          <Normal14 color={global.colors.gray1} mt={15}>
            {t("buildName")}:
          </Normal14>
          <Normal18 color={global.colors.main} mt={5}>
            {chosenData?.organization?.name_cyr}
          </Normal18>
          <Normal14 color={global.colors.gray1} mt={15}>
            {t("phoneNumber")}:
          </Normal14>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${chosenData?.phone}`)}
          >
            <Normal18 color={global.colors.main} mt={5} textDecor="underline">
              {chosenData?.phone}
            </Normal18>
          </TouchableOpacity>
          <Normal14 color={global.colors.gray1} mt={15}>
            {t("address")}:
          </Normal14>
          <Normal18 color={global.colors.main} mt={5}>
            {chosenData?.address}
          </Normal18>
          <TouchableOpacity
            onPress={() => navigation.navigate("ShowObject", { id })}
            style={{ marginTop: 15, alignItems: "center" }}
          >
            <SemiBold16 color={global.colors.main} textDecor="underline">
              {t("fullInfo")}
            </SemiBold16>
          </TouchableOpacity>
          {copied && (
            <Copied>
              <Normal14>{t("copied")}</Normal14>
            </Copied>
          )}
        </InfoWrap>
      )}
    </MapWrapp>
  );
};

export default MapScreen;

const MapWrapp = styled.View`
  flex: 1;
  background-color: ${global.colors.white};
  align-items: center;
  justify-content: center;
  position: relative;
`;

const InfoWrap = styled.View`
  position: absolute;
  bottom: 20px;
  background-color: ${global.colors.white};
  padding: 15px;
  width: 95%;
  min-height: 200px;
  border-radius: 15px;
`;

const CloseBtn = styled.TouchableOpacity`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${global.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  elevation: 5;
  border-radius: 50px;
`;

const Copied = styled.View`
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 20px;
  left: 30%;
  right: 30%;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const GoBack = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 10px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${global.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  elevation: 5;
  border-radius: 50px;
  z-index: 1;
`;
