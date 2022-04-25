import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import global from "../resourses/global";
import SelectBlock from "../components/SelectBlock";
import GridItem from "../components/GridItem";
import { useDispatch, useSelector } from "react-redux";
import { getObjects } from "../redux/Actions/objectsActions";
import Loading from "../components/Loading";

const arr = [
  {
    id: 1,
    num: "19:13:04:01:03:0643",
    orgName:
      "Сурхондарё Вилояти Касбий таълимни ривожлантириш ва мувофиқлаштириш худудий бошқармаси",
    year: 1997,
    count: 11,
    objCount: 13,
    created: "Эшонқулов Сирожиддин",
    edited: "Гайратжон Аюбов",
  },
  {
    id: 2,
    num: "19:13:04:01:03:0643",
    orgName:
      "Сурхондарё Вилояти Касбий таълимни ривожлантириш ва мувофиқлаштириш худудий бошқармаси",
    year: 1997,
    count: 11,
    objCount: 13,
    created: "Эшонқулов Сирожиддин",
    edited: "Гайратжон Аюбов",
  },
  {
    id: 3,
    num: "19:13:04:01:03:0643",
    orgName:
      "Сурхондарё Вилояти Касбий таълимни ривожлантириш ва мувофиқлаштириш худудий бошқармаси",
    year: 1997,
    count: 11,
    objCount: 13,
    created: "Эшонқулов Сирожиддин",
    edited: "Гайратжон Аюбов",
  },
  {
    id: 4,
    num: "19:13:04:01:03:0643",
    orgName:
      "Сурхондарё Вилояти Касбий таълимни ривожлантириш ва мувофиқлаштириш худудий бошқармаси",
    year: 1997,
    count: 11,
    objCount: 13,
    created: "Эшонқулов Сирожиддин",
    edited: "Гайратжон Аюбов",
  },
  {
    id: 5,
    num: "19:13:04:01:03:0643",
    orgName:
      "Сурхондарё Вилояти Касбий таълимни ривожлантириш ва мувофиқлаштириш худудий бошқармаси",
    year: 1997,
    count: 11,
    objCount: 13,
    created: "Эшонқулов Сирожиддин",
    edited: "Гайратжон Аюбов",
  },
  {
    id: 6,
    num: "19:13:04:01:03:0643",
    orgName:
      "Сурхондарё Вилояти Касбий таълимни ривожлантириш ва мувофиқлаштириш худудий бошқармаси",
    year: 1997,
    count: 11,
    objCount: 13,
    created: "Эшонқулов Сирожиддин",
    edited: "Гайратжон Аюбов",
  },
  {
    id: 7,
    num: "19:13:04:01:03:0643",
    orgName:
      "Сурхондарё Вилояти Касбий таълимни ривожлантириш ва мувофиқлаштириш худудий бошқармаси",
    year: 1997,
    count: 11,
    objCount: 13,
    created: "Эшонқулов Сирожиддин",
    edited: "Гайратжон Аюбов",
  },
  {
    id: 8,
    num: "19:13:04:01:03:0643",
    orgName:
      "Сурхондарё Вилояти Касбий таълимни ривожлантириш ва мувофиқлаштириш худудий бошқармаси",
    year: 1997,
    count: 11,
    objCount: 13,
    created: "Эшонқулов Сирожиддин",
    edited: "Гайратжон Аюбов",
  },
];

const ObjectsScreen = () => {
  const dispatch = useDispatch();

  const [select, setSelect] = useState(false);
  const [selectValue, setSelectValue] = useState("Вилоят");

  const { access } = useSelector((state) => state.auth);
  const { objects, objLoading } = useSelector((state) => state.objects);

  const params = {
    region__shared_id: "",
    district: "",
    search: "",
    limit: "",
    offset: "",
  };

  const handleSelect = (el) => {
    setSelectValue(el);
    setSelect(false);
  };

  useEffect(() => {
    dispatch(getObjects(params, access?.data?.access));
  }, [access]);

  console.log(objects);

  // if (objLoading) return <Loading />;

  return (
    <ObjectsWrap scrollEnabled={select ? false : true}>
      <SelectBlock
        select={select}
        selectValue={selectValue}
        onPress={() => setSelect(!select)}
        handleSelect={handleSelect}
        data={arr}
      />
      <GridWrap>
        {arr.map((el, i) => (
          <GridItem
            key={i + 1}
            disabled={select ? true : false}
            num={el.num}
            orgName={el.orgName}
            year={el.year}
            count={el.count}
            objCount={el.objCount}
            created={el.created}
            edited={el.edited}
          />
        ))}
      </GridWrap>
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
