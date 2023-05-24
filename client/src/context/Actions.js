//first action
export const LoginStartuser = () => ({
  type: "LoginStartUser",
});
//
export const LoginSuccessuser = (user) => ({
  type: "LoginSuccessUser",
  payload: user,
});
//
export const LoginFailureuser = () => ({
  type: "LoginFailureUser",
});
export const LogOutuser = () => ({
  type: "LogOutUser",
});
