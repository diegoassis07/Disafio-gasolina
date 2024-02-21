import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #1c1c1c;
  align-items: center;
`;
export const logo = styled.Image`
  margin-top: 90px;
`;
export const title = styled.Text`
  color: #fff;
  font-family: sans-serif;
  font-size: 27px;
  font-weight: bold;
  margin-top: 35px;
`;
export const LabelAlcool = styled.Text`
  color: #fff;
  font-size: 17px;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 50px;
  right: 85px;
`;
export const LabelGasolina = styled.Text`
  color: #fff;
  font-size: 17px;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 30px;
  right: 75px;
`;
export const input = styled.TextInput`
  width: 90%;
  height: 50px;
  background: #fff;
  margin-top: 10px;
  border-radius: 7px;
`;
export const button = styled.TouchableOpacity`
width: 90%;
height: 55px;
background-color: #ff0000;
justify-content: center;
align-items: center;
border-radius: 7px;
margin-top: 20px;
`;
export const textButton = styled.Text`
font-size: 20px;
font-family: sans-serif;
font-weight: bold;
color: #fff;
`;
