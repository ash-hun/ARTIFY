import { defaultDataType, defaultMemberDataType } from "./type";

export const LOGIN = "login";

export const defaultData: defaultDataType = {
  type: LOGIN,
  email: "",
  password: "",
};

export const defaultMemberData: defaultMemberDataType = {
  type: "",
  email: "",
  password: "",
  passwordCheck: "",
};
