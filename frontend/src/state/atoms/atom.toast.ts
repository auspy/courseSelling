import { ToastType } from "./../../types/types.toast";
import { atom } from "recoil";

const atomToast = atom({
  key: "toastState",
  default: {
    text: "",
    secs: 5000,
    type: "success",
  },
});
export default atomToast;
