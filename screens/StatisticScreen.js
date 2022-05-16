import React, { useEffect, useMemo } from "react";
import { Dimensions, ScrollView } from "react-native";
import styled from "styled-components/native";
import global from "../resourses/global";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import {
  getStatistic,
  getStatisticDiagram,
} from "../redux/Actions/statisticActions";
import { refreshToken } from "../redux/Actions/authActions";
import CardItem from "../components/CardItem";
import { BarChart, PieChart } from "react-native-chart-kit";

const StatisticScreen = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { statistic, statisticDiagram, statLoading } = useSelector(
    (state) => state.statistic
  );
  const { token, access } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getStatistic(access?.data?.access));
  }, [access]);

  useEffect(() => {
    dispatch(getStatisticDiagram(access?.data?.access));
  }, [access]);

  useEffect(() => {
    dispatch(refreshToken({ refresh: token }));
  }, [token]);

  const labelData = useMemo(() => {
    if (!statisticDiagram) return null;
    const data = statisticDiagram.regional_statistics?.map((el) => ({
      region_name: el.region,
      count: el.count_sustainable,
    }));
    if (!data) return null;
    const regions = data.map((el) => {
      // return [el.region_name, el.count];
      return el.region_name;
    });
    return regions;
  }, [statisticDiagram]);

  const setsData = useMemo(() => {
    if (!statisticDiagram) return null;
    const data = statisticDiagram.regional_statistics?.map((el) => ({
      count: el.count_sustainable,
    }));
    if (!data) return null;
    const dataSets = data.map((el) => el.count);
    return dataSets;
  }, [statisticDiagram]);

  const arr = [
    {
      name: t("strongBuildings"),
      buildCount: statistic?.sustainable_buildings,
      color: global.colors.green,
      legendFontColor: global.colors.dark,
      legendFontSize: 10,
    },
    {
      name: t("technicBuildings"),
      buildCount: statistic?.not_sustainable_buildings,
      color: global.colors.yellow,
      legendFontColor: global.colors.dark,
      legendFontSize: 10,
    },
    {
      name: t("weakBuildings"),
      buildCount: statistic?.not_sustainable_buildings4,
      color: global.colors.red,
      legendFontColor: global.colors.dark,
      legendFontSize: 10,
    },
  ];

  const data = {
    labels: labelData,
    datasets: [
      {
        data: setsData,
      },
    ],
  };

  const total_buildings =
    statistic?.existing_buildings + statistic?.new_buildings;

  if (!statistic || !statisticDiagram) return null;
  if (!labelData || !setsData) return null;
  if (statLoading) return <Loading />;

  return (
    <Wrapper showsVerticalScrollIndicator={false}>
      <CardWrap>
        <CardItem
          title={t("existingBuildings")}
          count={statistic?.existing_buildings}
        />
        <CardItem title={t("newBuildings")} count={statistic?.new_buildings} />
        <CardItem title={t("allBuildings")} count={total_buildings} />
        <CardItem
          title={t("strongBuildings")}
          count={statistic?.sustainable_buildings}
        />
        <CardItem
          title={t("technicBuildings")}
          count={statistic?.not_sustainable_buildings}
        />
        <CardItem
          title={t("weakBuildings")}
          count={statistic?.not_sustainable_buildings4}
        />
        <CardItem
          title={t("incompleteInfoBuildings")}
          count={statistic?.an_incomplete_building}
        />
        <CardItem
          title={t("newIncompleteInfoBuildings")}
          count={statistic?.an_incomplete_new_building}
        />
        <CardItem title={t("users")} count={statistic?.users} />
      </CardWrap>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 40 }}
      >
        <BarChart
          data={data}
          width={1200}
          height={500}
          verticalLabelRotation={-30}
          xLabelsOffset={-10}
          segments={6}
          fromZero={true}
          showValuesOnTopOfBars={true}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#eff3ff",
            barPercentage: 1.3,
            decimalPlaces: 0,
            color: () => global.colors.main,
            propsForLabels: {
              fontSize: 10,
              textAnchor: "end",
            },
          }}
          style={{
            borderRadius: 16,
            marginTop: 70,
          }}
        />
      </ScrollView>

      <PieChart
        data={arr}
        width={350}
        height={220}
        accessor="buildCount"
        center={[10, 0]}
        avoidFalseZero={false}
        absolute={true}
        chartConfig={{
          color: () => global.colors.main,
        }}
      />
    </Wrapper>
  );
};

export default StatisticScreen;

const Wrapper = styled.ScrollView`
  width: 100%;
  min-height: 100%;
  background-color: ${global.colors.white};
  padding: 10px;
`;

const CardWrap = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
