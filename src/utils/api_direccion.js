import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

class Api {
  obtenerUbicacion = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permiso denegado"
      });
    }
    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High
    });
    return location.coords;
  };
}

export default new Api();
