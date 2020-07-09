import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableWithoutFeedback,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { backgroundColor } from "../temas/tema1";
const whatsapp =
  "https://wa.me/51979107637?texto=Hola%20quiero%20cotizar%20una%20app";
const Footer = () => {
  const escribir = useCallback(async () => {
    await Linking.openURL(whatsapp);
  }, [whatsapp]);
  return (
    <TouchableWithoutFeedback onPress={escribir}>
      <View style={[style.container, { backgroundColor: "gray" }]}>
        <View style={style.cuerpo}>
          <Text style={style.titulo}>App Desarrollada por: </Text>
          <Text style={style.nombre}>Andrés A. Gallardo Ysla</Text>
          <Image
            style={style.whatsapp}
            source={require("../images/whatsapp.png")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    //position: "absolute",
    //backgroundColor: ,
    padding: 2,
    alignItems: "flex-start",
  },
  titulo: {
    fontSize: RFPercentage(2),
    color: "white",
  },
  cuerpo: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  nombre: {
    fontSize: RFPercentage(2),
    textAlign: "justify",
    color: "white",
  },
  whatsapp: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
export default Footer;
