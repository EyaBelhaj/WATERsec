const Reducers = (state, action) => {
  switch (action.type) {
    case "LoginStartUser":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LoginSuccessUser":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LoginFailureUser":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "LogOutUser":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
      return {
        reclamations: action.payload,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};
export default Reducers;
