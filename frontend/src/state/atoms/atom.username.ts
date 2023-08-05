import { atom } from "recoil";

export const atomUserName = atom({
  key: "userState",
  default: {
    username: "",
    role: "",
  },
});
