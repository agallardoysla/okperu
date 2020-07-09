import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { backgroundColor } from "../temas/tema1";

import call from "react-native-phone-call";
const whatsapp =
  "https://wa.me/51968823345?texto=Hola%20quiero%20cotizar%20una%20app";
const facebook = "https://www.facebook.com/OkPeruAgenicaDeMarketing";
const instagram = "https://www.instagram.com/ok_peru/?igshid=q9rg5nwwhs56";
const Contactos = (props) => {
  const escribir = useCallback(async () => {
    await Linking.openURL(whatsapp);
  }, [whatsapp]);
  const abrirFace = useCallback(async () => {
    await Linking.openURL(facebook);
  }, [whatsapp]);
  const abrirIns = useCallback(async () => {
    await Linking.openURL(instagram);
  }, [whatsapp]);
  return (
    <View style={style.container}>
      <Text style={style.cotizacion}>PIDE TU COTIZACION SIN COMPROMISO</Text>
      <TouchableWithoutFeedback onPress={props.setShowProforma}>
        <View style={style.proforma}>
          <View style={style.manitoContainer}>
            <Image
              style={style.manito}
              source={require("../images/iconos/manito.png")}
            />
          </View>

          <Text style={style.proformaTexto}>PROFORMA</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => {
          call({ number: `+51968823345` }).catch(console.error);
        }}
      >
        <View style={[style.llamar, backgroundColor.dark]}>
          <Image
            style={style.llamarImagen}
            source={require("../images/iconos/whatsapp.png")}
          />
          <Text style={style.llamarTexto}>¡LLAMANOS!</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={style.direccionText}>
        Av. Brasil Cdra 9 - piso 13 torre 2 - Lima / Jr. Leoncio Prado 1451 Int.
        2 - Huánuco
      </Text>
      <Text style={style.direccionText}>
        WhatsApp: 968823345 - Telf.: 062 605134
      </Text>
      <Text style={style.direccionText}>Siguenos en Facebook e Instagram</Text>
      <View style={style.redesContainer}>
        <TouchableWithoutFeedback onPress={abrirFace}>
          <View>
            <Image
              style={style.redesIco}
              source={require("../images/iconos/face.png")}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={abrirIns}>
          <View>
            <Image
              style={style.redesIco}
              source={require("../images/iconos/insta.png")}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={escribir}>
          <View>
            <Image
              style={style.redesIco}
              source={require("../images/iconos/whats.png")}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: "100%",
  },
  cotizacion: {
    width: "100%",
    textAlign: "center",
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
  },
  proforma: {
    width: "90%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: "#ff0000",
    marginBottom: 5,
  },
  manitoContainer: {
    width: "100%",
    position: "absolute",
    justifyContent: "flex-end",
    height: 90,
  },
  manito: {
    width: 70,
    height: 70,
    //justifyContent: "flex-end",
    position: "absolute",
    alignSelf: "flex-start",
  },
  proformaTexto: {
    fontSize: RFPercentage(4),
    fontWeight: "bold",
    color: "white",
  },
  llamar: {
    width: "60%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  llamarTexto: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    color: "white",
    marginRight: 10,
  },
  llamarImagen: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  direccionText: {
    fontSize: RFPercentage(1.4),
    textAlign: "center",
  },

  redesContainer: {
    height: 40,
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  redesIco: {
    width: 80,
    height: 30,
  },
});
export default Contactos;
