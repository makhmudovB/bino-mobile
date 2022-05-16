import React from "react";
import styled from "styled-components/native";
import { SemiBold16, Bold30 } from "../resourses/palettes";
import global from "../resourses/global";

const CardItem = ({ title, count }) => {
  return (
    <Card>
      <SemiBold16 color={global.colors.dark}>{title}</SemiBold16>
      <Bold30 color={global.colors.main} mt={10}>
        {count}
      </Bold30>
    </Card>
  );
};

export default CardItem;

const Card = styled.View`
  margin-top: 10px;
  width: 49%;
  min-height: 100px;
  border-radius: 10px;
  padding: 10px;
  justify-content: space-between;
  background-color: ${global.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  elevation: 5;
`;
