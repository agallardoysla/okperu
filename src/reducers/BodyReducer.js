export default (state = "Principal", action) => {
  switch (action.type) {
    case "selected_body":
      return action.payload;
    default:
      return state;
  }
};
