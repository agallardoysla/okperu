export default (state = [], action) => {
  switch (action.type) {
    case "guardar_clientes":
      return action.payload;
    default:
      return state;
  }
};
