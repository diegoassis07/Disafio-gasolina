import { View, Modal, Image } from "react-native";

import * as S from "./style";

export default function AppModal({
  modalVisible,
  setModalVisible,
  response,
  responsePriceAlcool,
  responsePriceGasolina
  
}) {
  return (
    <View>
      <Modal visible={modalVisible} animationType="slide">
        <S.content>
          <Image source={require("./../../assets/gas.png")} />
          <S.title>{response}</S.title>
          <S.labelPreço>Com os preços:</S.labelPreço>
          <S.alcool>Álcool: R$ {responsePriceAlcool}</S.alcool>
          <S.gasolina>Gasolina: R$ {responsePriceGasolina}</S.gasolina>
          <S.button onPress={() => setModalVisible(false)}>
            <S.textButton>Calcular novamente</S.textButton>
          </S.button>
        </S.content>
      </Modal>
    </View>
  );
}
