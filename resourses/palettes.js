import styled from "styled-components/native";
import global from "./global";

export const Normal14 = styled.Text`
  color: ${({ color = global.colors.white }) => color};
  font-weight: 400;
  font-size: 14px;
  margin-left: ${({ ml = 0 }) => ml}px;
  margin-top: ${({ mt = 0 }) => mt}px;
  text-decoration: ${({ textDecor = "none" }) => textDecor};
`;

export const Normal18 = styled.Text`
  color: ${({ color = global.colors.white }) => color};
  font-weight: 400;
  font-size: 18px;
  margin-top: ${({ mt = 0 }) => mt}px;
  margin-bottom: ${({ mb = 0 }) => mb}px;
  margin-left: ${({ ml = 0 }) => ml}px;
  text-decoration: ${({ textDecor = "none" }) => textDecor};
`;

export const SemiBold14 = styled.Text`
  color: ${({ color = global.colors.white }) => color};
  font-weight: 600;
  font-size: 14px;
`;

export const SemiBold16 = styled.Text`
  color: ${({ color = global.colors.white }) => color};
  font-weight: 600;
  font-size: 16px;
  margin-top: ${({ mt = 0 }) => mt}px;
  margin-left: ${({ ml = 0 }) => ml}px;
  text-decoration: ${({ textDecor = "none" }) => textDecor};
`;

export const SemiBold20 = styled.Text`
  color: ${({ color = global.colors.white }) => color};
  font-weight: 600;
  font-size: 20px;
  margin-bottom: ${({ mb = 0 }) => mb}px;
`;

export const Bold30 = styled.Text`
  color: ${({ color = global.colors.white }) => color};
  font-weight: 700;
  font-size: 30px;
  margin-top: ${({ mt = 0 }) => mt}px;
`;

export const Bold40 = styled.Text`
  color: ${({ color = global.colors.white }) => color};
  font-weight: 700;
  font-size: 40px;
`;
