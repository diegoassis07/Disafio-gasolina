import { Keyboard } from "react-native";
import { useState } from "react";

import AppModal from "../../components/Modal";

import * as S from "./style";

export default function AppGasolina() {
  const [inputAlcool, setInputAlcool] = useState("");
  const [inputGasolina, setInputGasolina] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [response, setResponse] = useState("");
  const [ responsePriceAlcool, setResponsePriceAlcool] = useState("")
  const [ responsePriceGasolina, setResponsePriceGasolina] = useState("")

  const Calcular = () => {
    const inputA = parseFloat(inputAlcool);
    const inputG = parseFloat(inputGasolina);
    const soma = inputA / inputG;
    soma < 0.7
      ? setResponse("Compensa usar Álcool")
      : setResponse("Compensa usar Gasolina");
    setModalVisible(true);
    Keyboard.dismiss();
    setInputAlcool("");
    setInputGasolina("");
    setResponsePriceAlcool(inputAlcool)
    setResponsePriceGasolina(inputGasolina)
  };

  return (
    <S.Container>
      <S.logo source={require("./../../assets/logo.png")} />
      <S.title>Qual melhor opção?</S.title>
      <S.LabelAlcool>Álcool (preço por litro);</S.LabelAlcool>
      <S.input
        value={inputAlcool}
        onChangeText={(text) => setInputAlcool(text)}
        keyboardType="numeric"
      />
      <S.LabelGasolina>Gasolina (preço por litro);</S.LabelGasolina>
      <S.input
        value={inputGasolina}
        onChangeText={(text) => setInputGasolina(text)}
        keyboardType="numeric"
      />
      <S.button onPress={Calcular}>
        <S.textButton>Calcular</S.textButton>
      </S.button>
      <AppModal
        modalVisible={modalVisible}
        response={response}
        setModalVisible={setModalVisible}
        responsePriceAlcool={responsePriceAlcool}
        responsePriceGasolina={responsePriceGasolina}
        
      />
    </S.Container>
  );
}
