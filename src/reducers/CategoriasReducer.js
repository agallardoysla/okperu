export default (state = [], action) => {
  switch (action.type) {
    case "guardar_categorias":
      return action.payload;
    default:
      return state;
  }
};
