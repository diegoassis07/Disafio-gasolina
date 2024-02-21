import { StyleSheet, View } from "react-native";

import Posto from "./src/pages/posto";

export default function App() {
  return (
    <View style={styles.container}>
      <Posto />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
