const URL = "https://chaski-snack.herokuapp.com/apis/categoriasok.php?funcion=";

class Api {
  async guardar_categorias(datos) {
    const data = new FormData();
    data.append("nombre_categoria", datos.nombre_categoria);
    data.append("descripcion_categoria", datos.descripcion_categoria);

    fetch(`${URL}guardar`, {
      method: "POST",
      body: data
    })
      .then(r => r.json())
      .then(data => console.log("guardar_categorias", data))
      .catch(e => console.error("guardar_categorias - error", e));
  }
  async editar_categorias(datos) {
    const data = new FormData();
    data.append("id", datos.id);
    data.append("nombre_categoria", datos.nombre_categoria);
    data.append("descripcion_categoria", datos.descripcion_categoria);

    fetch(`${URL}editar`, {
      method: "POST",
      body: data
    })
      .then(r => r.json())
      .then(data => console.log("guardar_categorias", data))
      .catch(e => console.error("guardar_categorias - error", e));
  }
  async todos() {
    try {
      const query = await fetch(`${URL}todos`);
      const data = await query.json();
      return data;
    } catch (error) {
      console.log("buscar_categorias", error);
      return [];
    }
  }
  async buscar_categorias(campo, valor) {
    try {
      const query = await fetch(`${URL}buscar&campo=${campo}&valor=${valor}`);
      const data = await query.json();

      return data;
    } catch (error) {
      console.log("buscar_categorias", error);
      return [];
    }
  }
}

export default new Api();
