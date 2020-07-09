export const selected_tab = (tabId) => {
  return {
    type: "selected_tab",
    payload: tabId,
  };
};
export const selected_body = (bodyId) => {
  return {
    type: "selected_body",
    payload: bodyId,
  };
};
export const guardar_clientes = (clientes) => {
  return {
    type: "guardar_clientes",
    payload: clientes,
  };
};
export const guardar_categorias = (categorias) => {
  return {
    type: "guardar_categorias",
    payload: categorias,
  };
};
