import React, { component } from "react";

export const secciones = {
  cabecera: {
    heigth: 50,
    width: "100%"
  },
  cuerpo: {
    flex: 1
  },
  footer: {
    heigth: 60,
    width: "100%"
  }
};
export const temas = {
  light: {
    backgroundColor: "#85c5ce"
  },
  dark: {
    backgroundColor: "#49a9b6"
  }
};
export const TemaContext = React.createContext({
  temas: temas.light
});
